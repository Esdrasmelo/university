import { Injectable } from '@nestjs/common';
import { CoursesTeachers } from '@prisma/client';
import { CoursesTeachersWhereInput } from 'prisma/generated/courses-teachers';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseTeacherInput } from './dto/create-course-teacher.input';
import { UpdateCourseTeacherInput } from './dto/update-course-teacher.input';

@Injectable()
export class CourseTeacherRepository {
  constructor(private prisma: PrismaService) {}

  async get(where?: CoursesTeachersWhereInput): Promise<CoursesTeachers[]> {
    return this.prisma.coursesTeachers.findMany({
      where,
    });
  }

  async create(
    createCourseTeacherInput: CreateCourseTeacherInput,
  ): Promise<CoursesTeachers> {
    return this.prisma.coursesTeachers.create({
      data: createCourseTeacherInput,
    });
  }

  async update(
    id: number,
    updateCourseTeacherInput: UpdateCourseTeacherInput,
  ): Promise<CoursesTeachers> {
    return this.prisma.coursesTeachers.update({
      data: updateCourseTeacherInput,
      where: {
        id,
      },
    });
  }

  async delete(id: number): Promise<CoursesTeachers> {
    return this.prisma.coursesTeachers.delete({
      where: {
        id,
      },
    });
  }
}
