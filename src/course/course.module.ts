import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseResolver } from './course.resolver';
import { CourseRepository } from './course.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    CourseResolver,
    CourseService,
    CourseRepository,
    PrismaService,
    JwtService,
  ],
})
export class CourseModule {}
