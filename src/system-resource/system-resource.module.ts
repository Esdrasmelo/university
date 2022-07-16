import { Module } from '@nestjs/common';
import { SystemResourceService } from './system-resource.service';
import { SystemResourceResolver } from './system-resource.resolver';
import { SystemResourceRepository } from './system-resource.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    SystemResourceResolver,
    SystemResourceService,
    SystemResourceRepository,
    PrismaService,
    JwtService,
  ],
})
export class SystemResourceModule {}
