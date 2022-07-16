import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CourseService } from './course.service';
import { CourseSchema } from './entities/course.entity';
import { CreateCourseInput } from './dto/inputs/create-course.input';
import { UpdateCourseInput } from './dto/inputs/update-course.input';
import { Courses } from '@prisma/client';
import { CoursesWhereInput } from 'prisma/generated/courses';
import { UseGuards, UseInterceptors } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { UserPermissionsGuard } from 'src/auth/guards/permissions-auth.guard';

@Resolver()
export class CourseResolver {
  constructor(private readonly courseService: CourseService) {}

  @Query(() => [CourseSchema])
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Courses', 'can_read'))
  async courses(
    @Args('where', { nullable: true }) where?: CoursesWhereInput,
  ): Promise<Courses[]> {
    return this.courseService.courses(where);
  }

  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Courses', 'can_create'))
  @Mutation(() => CourseSchema)
  async createCourse(
    @Args('createCourseInput') createCourseInput: CreateCourseInput,
  ): Promise<Courses> {
    return this.courseService.createCourse(createCourseInput);
  }

  @Mutation(() => CourseSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Courses', 'can_update'))
  async updateCourse(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateCourseInput') updateCourseInput: UpdateCourseInput,
  ): Promise<Courses> {
    return this.courseService.updateCourse(id, updateCourseInput);
  }

  @Mutation(() => CourseSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Courses', 'can_delete'))
  async deleteCourse(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Courses> {
    return this.courseService.deleteCourse(id);
  }
}
