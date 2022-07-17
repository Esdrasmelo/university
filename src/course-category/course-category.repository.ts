import { Injectable } from '@nestjs/common';
import { CoursesCategories } from '@prisma/client';
import { CoursesCategoriesWhereInput } from 'prisma/generated/courses-categories';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseCategoryInput } from './dto/inputs/create-course-category.input';
import { UpdateCourseCategoryInput } from './dto/inputs/update-course-category.input';

@Injectable()
export class CourseCategoryRepository {
  constructor(private prisma: PrismaService) {}

  async get(where?: CoursesCategoriesWhereInput): Promise<CoursesCategories[]> {
    try {
      return this.prisma.coursesCategories.findMany({
        where,
      });
    } catch (error) {
      throw error;
    }
  }

  async create(
    createCourseCategoryInput: CreateCourseCategoryInput,
  ): Promise<CoursesCategories> {
    try {
      return this.prisma.coursesCategories.create({
        data: createCourseCategoryInput,
      });
    } catch (error) {
      throw error;
    }
  }

  async update(
    id: number,
    updateCourseCategoryInput: UpdateCourseCategoryInput,
  ): Promise<CoursesCategories> {
    try {
      return this.prisma.coursesCategories.update({
        data: updateCourseCategoryInput,
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<CoursesCategories> {
    try {
      return this.prisma.coursesCategories.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
