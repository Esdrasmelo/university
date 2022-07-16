import {
  ExecutionContext,
  NestInterceptor,
  CallHandler,
  UnauthorizedException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UsersRole } from '@prisma/client';
import { Observable, tap, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserPermissionsGuard implements NestInterceptor {
  constructor(private resource: string, private ability: string) {}

  private async verifyPermissions(userRole: UsersRole): Promise<boolean> {
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

    console.log(permissions);

    if (!permissions.length || !permissions[0][this.ability]) return false;

    return true;
  }

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const loggedUser = GqlExecutionContext.create(context).getContext().user;
    const userHasPermission = await this.verifyPermissions(loggedUser.roles);

    if (userHasPermission) return next.handle().pipe(tap(() => true));

    throw new UnauthorizedException(
      'You do not have permission to access this route',
    );
  }
}
