import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { BcryptUtils } from 'src/utils/bcrypt.utils';
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
          expiresIn: '5m',
        },
      }),
    }),
    UserModule,
  ],
  providers: [AuthService, AuthResolver, BcryptUtils, JwtStrategy, JwtService],
})
export class AuthModule {}
