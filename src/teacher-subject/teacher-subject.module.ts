import { Module } from '@nestjs/common';
import { TeacherSubjectService } from './teacher-subject.service';
import { TeacherSubjectResolver } from './teacher-subject.resolver';
import { TeacherSubjectRepository } from './teacher-subejct.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    TeacherSubjectResolver,
    TeacherSubjectService,
    TeacherSubjectRepository,
    PrismaService,
    JwtService,
  ],
})
export class TeacherSubjectModule {}
