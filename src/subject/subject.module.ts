import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectResolver } from './subject.resolver';
import { SubjectRepository } from './subject.repository';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    SubjectResolver,
    SubjectService,
    SubjectRepository,
    PrismaService,
    JwtService,
  ],
})
export class SubjectModule {}
