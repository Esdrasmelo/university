import { Injectable } from '@nestjs/common';
import { Courses } from '@prisma/client';
import { CoursesWhereInput } from 'prisma/generated/courses';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCourseInput } from './dto/inputs/create-course.input';
import { UpdateCourseInput } from './dto/inputs/update-course.input';

@Injectable()
export class CourseRepository {
  constructor(private prisma: PrismaService) {}

  async get(where?: CoursesWhereInput): Promise<Courses[]> {
    try {
      return this.prisma.courses.findMany({
        where,
      });
    } catch (error) {
      throw error;
    }
  }

  async create(createCourseInput: CreateCourseInput): Promise<Courses> {
    try {
      return this.prisma.courses.create({
        data: createCourseInput,
      });
    } catch (error) {
      throw error;
    }
  }

  async update(
    id: number,
    updateCourseInput: UpdateCourseInput,
  ): Promise<Courses> {
    try {
      return this.prisma.courses.update({
        data: updateCourseInput,
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
  async delete(id: number): Promise<Courses> {
    try {
      return this.prisma.courses.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
