import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CoursesCategories } from '@prisma/client';
import { CoursesCategoriesWhereInput } from 'prisma/generated/courses-categories';
import { CourseCategoryRepository } from './course-category.repository';
import { CreateCourseCategoryInput } from './dto/inputs/create-course-category.input';
import { UpdateCourseCategoryInput } from './dto/inputs/update-course-category.input';

@Injectable()
export class CourseCategoryService {
  constructor(private courseCategoryRepository: CourseCategoryRepository) {}

  async coursesCategories(
    where?: CoursesCategoriesWhereInput,
  ): Promise<CoursesCategories[]> {
    try {
      return this.courseCategoryRepository.get(where);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async createCourseCategory(
    createCourseCategoryInput: CreateCourseCategoryInput,
  ): Promise<CoursesCategories> {
    try {
      return this.courseCategoryRepository.create(createCourseCategoryInput);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async updateCourseCategory(
    id: number,
    updateCourseCategoryInput: UpdateCourseCategoryInput,
  ): Promise<CoursesCategories> {
    try {
      return this.courseCategoryRepository.update(
        id,
        updateCourseCategoryInput,
      );
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async deleteCourseCategory(id: number): Promise<CoursesCategories> {
    try {
      return this.courseCategoryRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
