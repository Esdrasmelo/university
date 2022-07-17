import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CoursesTeachers } from '@prisma/client';
import { CoursesTeachersWhereInput } from 'prisma/generated/courses-teachers';
import { CourseTeacherRepository } from './course-teacher.repository';
import { CreateCourseTeacherInput } from './dto/create-course-teacher.input';
import { UpdateCourseTeacherInput } from './dto/update-course-teacher.input';

@Injectable()
export class CourseTeacherService {
  constructor(private courseTeacherRepository: CourseTeacherRepository) {}

  async coursesTeachers(
    where?: CoursesTeachersWhereInput,
  ): Promise<CoursesTeachers[]> {
    try {
      return this.courseTeacherRepository.get(where);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async createCourseTeacher(
    createCourseTeacherInput: CreateCourseTeacherInput,
  ): Promise<CoursesTeachers> {
    try {
      return this.courseTeacherRepository.create(createCourseTeacherInput);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async updateCourseTeacher(
    id: number,
    updateCourseTeacherInput: UpdateCourseTeacherInput,
  ): Promise<CoursesTeachers> {
    try {
      return this.courseTeacherRepository.update(id, updateCourseTeacherInput);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async deleteCourseTeacher(id: number): Promise<CoursesTeachers> {
    try {
      return this.courseTeacherRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
