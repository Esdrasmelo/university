import {
  CallHandler,
  ExecutionContext,
  InternalServerErrorException,
  NestInterceptor,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UsersRole } from '@prisma/client';
import { tap } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';

export class TeachersGuard implements NestInterceptor {
  constructor(private ability: string) {}

  private async verifyPermissions(
    userRole: UsersRole,
    userId: number,
    id: number,
  ) {
    try {
      const prisma = new PrismaService();
      const teachersPermissions = await prisma.permissions.findMany({
        where: {
          system_resources: {
            name: 'Teachers',
          },
          user_role: {
            equals: userRole,
          },
        },
        select: {
          [this.ability]: true,
        },
      });

      const isOwner = await prisma.teachers.findFirst({
        where: {
          user_id: userId,
          id,
        },
      });

      if (
        !teachersPermissions.length ||
        !teachersPermissions[0][this.ability] ||
        !isOwner
      )
        return false;

      return true;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async intercept(context: ExecutionContext, next: CallHandler<any>) {
    const request = GqlExecutionContext.create(context);
    const loggedUser = request.getContext().user;
    const studentId = request.getArgs().id;

    const isSpecificRoles =
      loggedUser.roles === 'TEACHER' || loggedUser.roles === 'ADMIN';

    const userHasPermissions = await this.verifyPermissions(
      loggedUser.roles,
      loggedUser.sub,
      studentId,
    );

    if (isSpecificRoles && userHasPermissions)
      return next.handle().pipe(tap(() => true));

    return next.handle().pipe(
      tap(() => {
        throw new UnauthorizedException(
          'You do not have permission to access this route',
        );
      }),
    );
  }
}
