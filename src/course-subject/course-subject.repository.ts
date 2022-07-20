import { Injectable } from '@nestjs/common';
import { CoursesSubjects } from '@prisma/client';
import { CoursesSubjectsWhereInput } from 'prisma/generated/courses-subjects';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseSubjectInput } from './dto/create-course-subject.input';
import { UpdateCourseSubjectInput } from './dto/update-course-subject.input';

@Injectable()
export class CourseSubjectRepository {
  constructor(private prisma: PrismaService) {}

  async get(where?: CoursesSubjectsWhereInput): Promise<CoursesSubjects[]> {
    return this.prisma.coursesSubjects.findMany({
      where,
    });
  }

  async create(
    createCourseSubjectInput: CreateCourseSubjectInput,
  ): Promise<CoursesSubjects> {
    try {
      return this.prisma.coursesSubjects.create({
        data: createCourseSubjectInput,
      });
    } catch (error) {
      throw error;
    }
  }

  async update(
    id: number,
    updateCourseSubjectInput: UpdateCourseSubjectInput,
  ): Promise<CoursesSubjects> {
    return this.prisma.coursesSubjects.update({
      data: updateCourseSubjectInput,
      where: {
        id,
      },
    });
  }

  async delete(id: number): Promise<CoursesSubjects> {
    return this.prisma.coursesSubjects.delete({
      where: {
        id,
      },
    });
  }
}
