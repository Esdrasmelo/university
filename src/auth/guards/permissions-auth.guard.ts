import {
  ExecutionContext,
  NestInterceptor,
  CallHandler,
  UnauthorizedException,
  Injectable,
  CanActivate,
  InternalServerErrorException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UsersRole } from '@prisma/client';
import { ACGuard } from 'nest-access-control';
import { Observable, tap } from 'rxjs';
import { PermissionService } from 'src/permission/permission.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserPermissions implements NestInterceptor {
  constructor(private resource: string, private ability: string) {}

  private async verifyPermissions(userRole: UsersRole): Promise<boolean> {
    try {
      const prisma = new PrismaService();
      const permissions = await prisma.permissions.findMany({
        where: {
          system_resources: {
            name: this.resource,
          },
          user_role: {
            equals: userRole,
          },
        },
        select: {
          [this.ability]: true,
        },
      });

      if (!permissions.length || !permissions[0][this.ability]) return false;

      return true;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async intercept(context: ExecutionContext, next: CallHandler) {
    const loggedUser = GqlExecutionContext.create(context).getContext().user;
    const userHasPermission = await this.verifyPermissions(loggedUser.roles);

    if (userHasPermission) return next.handle().pipe(tap(() => true));

    return next.handle().pipe(
      tap(() => {
        throw new UnauthorizedException(
          'You do not have permission to access this route',
        );
      }),
    );
  }
}
