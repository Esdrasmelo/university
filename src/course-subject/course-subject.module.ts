import { Module } from '@nestjs/common';
import { CourseSubjectService } from './course-subject.service';
import { CourseSubjectResolver } from './course-subject.resolver';
import { CourseSubjectRepository } from './course-subject.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    CourseSubjectResolver,
    CourseSubjectService,
    CourseSubjectRepository,
    PrismaService,
    JwtService,
  ],
})
export class CourseSubjectModule {}
