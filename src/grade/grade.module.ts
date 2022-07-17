import { Module } from '@nestjs/common';
import { GradeService } from './grade.service';
import { GradeResolver } from './grade.resolver';
import { GradeRepository } from './grade.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    GradeResolver,
    GradeService,
    GradeRepository,
    PrismaService,
    JwtService,
  ],
})
export class GradeModule {}
