import { Module } from '@nestjs/common';
import { CourseTeacherService } from './course-teacher.service';
import { CourseTeacherResolver } from './course-teacher.resolver';
import { CourseTeacherRepository } from './course-teacher.repository';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    CourseTeacherResolver,
    CourseTeacherService,
    CourseTeacherRepository,
    PrismaService,
    JwtService,
  ],
})
export class CourseTeacherModule {}
