import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from '../prisma/prisma.service';
import { UserModule } from '../user/user.module';
import { BcryptUtils } from '../utils/bcrypt.utils';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.PRIVATE_KEY,
        signOptions: {
          expiresIn: '10m',
        },
      }),
    }),
  ],
  providers: [
    AuthService,
    AuthResolver,
    PrismaService,
    BcryptUtils,
    JwtStrategy,
    JwtService,
  ],
})
export class AuthModule {}
