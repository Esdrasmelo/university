import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherResolver } from './teacher.resolver';
import { TeacherRepository } from './teacher.repository';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    TeacherResolver,
    TeacherService,
    TeacherRepository,
    PrismaService,
    JwtService,
  ],
})
export class TeacherModule {}
