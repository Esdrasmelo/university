import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Courses } from '@prisma/client';
import { CoursesWhereInput } from 'prisma/generated/courses';
import { CourseRepository } from './course.repository';
import { CreateCourseInput } from './dto/inputs/create-course.input';
import { UpdateCourseInput } from './dto/inputs/update-course.input';

@Injectable()
export class CourseService {
  constructor(private courseRepository: CourseRepository) {}

  async courses(where?: CoursesWhereInput): Promise<Courses[]> {
    try {
      return this.courseRepository.get(where);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async createCourse(createCourseInput: CreateCourseInput): Promise<Courses> {
    try {
      return this.courseRepository.create(createCourseInput);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async updateCourse(
    id: number,
    updateCourseInput: UpdateCourseInput,
  ): Promise<Courses> {
    try {
      return this.courseRepository.update(id, updateCourseInput);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async deleteCourse(id: number): Promise<Courses> {
    try {
      return this.courseRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
