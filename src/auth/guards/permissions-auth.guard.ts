import {
  Injectable,
  ExecutionContext,
  NestInterceptor,
  CallHandler,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { tap } from 'rxjs';

@Injectable()
export class UserPermissions implements NestInterceptor {
  constructor(private role: string | string[]) {}

  async intercept(context: ExecutionContext, next: CallHandler) {
    const loggedUser = GqlExecutionContext.create(context).getContext().user;

    if (this.role.includes(loggedUser.role)) {
      return next.handle().pipe(tap(() => true));
    }

    return next.handle().pipe(
      tap(() => {
        throw new UnauthorizedException(
          'You do not have permission to access this route',
        );
      }),
    );
  }
}
