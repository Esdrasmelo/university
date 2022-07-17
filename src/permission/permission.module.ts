import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionResolver } from './permission.resolver';
import { PermissionRepository } from './permission.repository';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    PermissionService,
    PermissionResolver,
    PermissionRepository,
    PrismaService,
    JwtService,
  ],
  exports: [PermissionService, PermissionRepository],
})
export class PermissionModule {}
