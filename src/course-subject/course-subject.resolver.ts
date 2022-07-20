import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CourseSubjectService } from './course-subject.service';
import { CourseSubjectSchema } from './entities/course-subject.entity';
import { CreateCourseSubjectInput } from './dto/create-course-subject.input';
import { UpdateCourseSubjectInput } from './dto/update-course-subject.input';
import { CoursesSubjectsWhereInput } from 'prisma/generated/courses-subjects';
import { CoursesSubjects } from '@prisma/client';
import { UseGuards, UseInterceptors } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { UserPermissionsGuard } from '../auth/guards/permissions-auth.guard';

@Resolver()
export class CourseSubjectResolver {
  constructor(private readonly courseSubjectService: CourseSubjectService) {}

  @Query(() => [CourseSubjectSchema])
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Courses Subjects', 'can_read'))
  coursesSubjects(
    @Args('where', { nullable: true }) where?: CoursesSubjectsWhereInput,
  ): Promise<CoursesSubjects[]> {
    return this.courseSubjectService.coursesSubjects(where);
  }

  @Mutation(() => CourseSubjectSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Courses Subjects', 'can_create'))
  createCourseSubject(
    @Args('createCourseSubjectInput')
    createCourseSubjectInput: CreateCourseSubjectInput,
  ): Promise<CoursesSubjects> {
    return this.courseSubjectService.createSubject(createCourseSubjectInput);
  }

  @Mutation(() => CourseSubjectSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Courses Subjects', 'can_update'))
  updateCourseSubject(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateCourseSubjectInput')
    updateCourseSubjectInput: UpdateCourseSubjectInput,
  ): Promise<CoursesSubjects> {
    return this.courseSubjectService.updateSubject(
      id,
      updateCourseSubjectInput,
    );
  }

  @Mutation(() => CourseSubjectSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Courses Subjects', 'can_delete'))
  deleteCourseSubject(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<CoursesSubjects> {
    return this.courseSubjectService.deleteSubject(id);
  }
}
