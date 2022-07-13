import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class GqlAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async validateToken(auth: string) {
    try {
      if (auth.split(' ')[0] !== 'Bearer')
        throw new UnauthorizedException('Invalid token');

      const token = auth.split(' ')[1];

      const decodedToken = this.jwtService.verify(token, {
        secret: process.env.PRIVATE_KEY,
      });

      return decodedToken;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const _context = GqlExecutionContext.create(context).getContext();

    if (!_context.headers.authorization) {
      return false;
    }

    _context.user = await this.validateToken(_context.headers.authorization);

    return true;
  }
}
