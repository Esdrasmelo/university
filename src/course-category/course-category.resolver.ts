import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CourseCategoryService } from './course-category.service';
import { CourseCategorySchema } from './entities/course-category.entity';
import { CreateCourseCategoryInput } from './dto/inputs/create-course-category.input';
import { UpdateCourseCategoryInput } from './dto/inputs/update-course-category.input';
import { CoursesCategories } from '@prisma/client';
import { CoursesCategoriesWhereInput } from 'prisma/generated/courses-categories';
import { UseGuards, UseInterceptors } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { UserPermissionsGuard } from 'src/auth/guards/permissions-auth.guard';

@Resolver()
export class CourseCategoryResolver {
  constructor(private readonly courseCategoryService: CourseCategoryService) {}

  @Query(() => [CourseCategorySchema])
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Courses Categories', 'can_read'))
  async coursesCategories(
    @Args('where', { nullable: true }) where?: CoursesCategoriesWhereInput,
  ): Promise<CoursesCategories[]> {
    return this.courseCategoryService.coursesCategories(where);
  }

  @Mutation(() => CourseCategorySchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Courses Categories', 'can_create'))
  async createCourseCategory(
    @Args('createCourseCategoryInput')
    createCourseCategoryInput: CreateCourseCategoryInput,
  ): Promise<CoursesCategories> {
    return this.courseCategoryService.createCourseCategory(
      createCourseCategoryInput,
    );
  }

  @Mutation(() => CourseCategorySchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Courses Categories', 'can_update'))
  async updateCourseCategory(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateCourseCategoryInput')
    updateCourseCategoryInput: UpdateCourseCategoryInput,
  ): Promise<CoursesCategories> {
    return this.courseCategoryService.updateCourseCategory(
      id,
      updateCourseCategoryInput,
    );
  }

  @Mutation(() => CourseCategorySchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Courses Categories', 'can_delete'))
  async deleteCourseCategory(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<CoursesCategories> {
    return this.courseCategoryService.deleteCourseCategory(id);
  }
}
