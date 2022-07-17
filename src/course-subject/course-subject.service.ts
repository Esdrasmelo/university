import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CoursesSubjects } from '@prisma/client';
import { CoursesSubjectsWhereInput } from 'prisma/generated/courses-subjects';
import { CourseSubjectRepository } from './course-subject.repository';
import { CreateCourseSubjectInput } from './dto/create-course-subject.input';
import { UpdateCourseSubjectInput } from './dto/update-course-subject.input';

@Injectable()
export class CourseSubjectService {
  constructor(private courseSubjectRepository: CourseSubjectRepository) {}

  async coursesSubjects(
    where?: CoursesSubjectsWhereInput,
  ): Promise<CoursesSubjects[]> {
    try {
      return this.courseSubjectRepository.get(where);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async createSubject(
    createCourseSubjectInput: CreateCourseSubjectInput,
  ): Promise<CoursesSubjects> {
    try {
      return this.courseSubjectRepository.create(createCourseSubjectInput);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async updateSubject(
    id: number,
    updateCourseSubjectInput: UpdateCourseSubjectInput,
  ): Promise<CoursesSubjects> {
    try {
      return this.courseSubjectRepository.update(id, updateCourseSubjectInput);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async deleteSubject(id: number): Promise<CoursesSubjects> {
    try {
      return this.courseSubjectRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
