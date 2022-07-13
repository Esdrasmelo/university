import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { BcryptUtils } from 'src/utils/bcrypt.utils';
import { UserRepository } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  providers: [
    UserResolver,
    UserService,
    UserRepository,
    PrismaService,
    BcryptUtils,
    JwtService,
  ],
  exports: [UserService],
})
export class UserModule {}
