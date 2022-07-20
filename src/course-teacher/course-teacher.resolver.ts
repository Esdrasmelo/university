import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CourseTeacherService } from './course-teacher.service';
import { CourseTeacherSchema } from './entities/course-teacher.entity';
import { CreateCourseTeacherInput } from './dto/create-course-teacher.input';
import { UpdateCourseTeacherInput } from './dto/update-course-teacher.input';
import { CoursesTeachers } from '@prisma/client';
import { CoursesTeachersWhereInput } from 'prisma/generated/courses-teachers';
import { UseGuards, UseInterceptors } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { UserPermissionsGuard } from '../auth/guards/permissions-auth.guard';

@Resolver()
export class CourseTeacherResolver {
  constructor(private readonly courseTeacherService: CourseTeacherService) {}

  @Query(() => [CourseTeacherSchema])
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Courses Teachers', 'can_read'))
  async coursesTeachers(
    @Args('where', { nullable: true }) where?: CoursesTeachersWhereInput,
  ): Promise<CoursesTeachers[]> {
    return this.courseTeacherService.coursesTeachers(where);
  }

  @Mutation(() => CourseTeacherSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Courses Teachers', 'can_create'))
  async createCourseTeacher(
    @Args('createCourseTeacherInput')
    createCourseTeacherInput: CreateCourseTeacherInput,
  ): Promise<CoursesTeachers> {
    return this.courseTeacherService.createCourseTeacher(
      createCourseTeacherInput,
    );
  }

  @Mutation(() => CourseTeacherSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Courses Teachers', 'can_update'))
  async updateCourseTeacher(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateCourseTeacherInput')
    updateCourseTeacherInput: UpdateCourseTeacherInput,
  ): Promise<CoursesTeachers> {
    return this.courseTeacherService.updateCourseTeacher(
      id,
      updateCourseTeacherInput,
    );
  }

  @Mutation(() => CourseTeacherSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Courses Teachers', 'can_delete'))
  async deleteCourseTeacher(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<CoursesTeachers> {
    return this.courseTeacherService.deleteCourseTeacher(id);
  }
}
