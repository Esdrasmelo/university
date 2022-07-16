import { Module } from '@nestjs/common';
import { CourseCategoryService } from './course-category.service';
import { CourseCategoryResolver } from './course-category.resolver';
import { CourseCategoryRepository } from './course-category.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    CourseCategoryResolver,
    CourseCategoryService,
    CourseCategoryRepository,
    PrismaService,
    JwtService,
  ],
})
export class CourseCategoryModule {}
