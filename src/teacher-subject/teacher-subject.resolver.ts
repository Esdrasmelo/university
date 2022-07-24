import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TeacherSubjectService } from './teacher-subject.service';
import { TeacherSubjectSchema } from './entities/teacher-subject.entity';
import { CreateTeacherSubjectInput } from './dto/create-teacher-subject.input';
import { UpdateTeacherSubjectInput } from './dto/update-teacher-subject.input';
import { TeachersSubjects } from '@prisma/client';
import { UseGuards, UseInterceptors } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { UserPermissionsGuard } from '../auth/guards/permissions-auth.guard';
import { RedisDecorator } from '../utils/redis/redis-client.decorator';

@Resolver()
export class TeacherSubjectResolver {
  constructor(private readonly teacherSubjectService: TeacherSubjectService) {}

  @Query(() => [TeacherSubjectSchema])
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Teachers Subjects', 'can_read'))
  teachersSubjects(@RedisDecorator() redis: any): Promise<TeachersSubjects[]> {
    return this.teacherSubjectService.teachersSubejcts(redis);
  }

  @Query(() => TeacherSubjectSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Teachers Subjects', 'can_read'))
  teacherSubject(
    @Args('teacherSubjectId', { type: () => Int }) teacherSubjectId: number,
  ): Promise<TeachersSubjects> {
    return this.teacherSubjectService.teacherSubejct(teacherSubjectId);
  }

  @Mutation(() => TeacherSubjectSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Teachers Subjects', 'can_create'))
  createTeacherSubject(
    @Args('createTeacherSubjectInput')
    createTeacherSubjectInput: CreateTeacherSubjectInput,
  ): Promise<TeachersSubjects> {
    return this.teacherSubjectService.createTeacherSubject(
      createTeacherSubjectInput,
    );
  }

  @Mutation(() => TeacherSubjectSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Teachers Subjects', 'can_update'))
  updateTeacherSubject(
    @Args('id', { type: () => Int }) id: number,

    @Args('updateTeacherSubjectInput')
    updateTeacherSubjectInput: UpdateTeacherSubjectInput,
  ): Promise<TeachersSubjects> {
    return this.teacherSubjectService.updateTeacherSubject(
      id,
      updateTeacherSubjectInput,
    );
  }

  @Mutation(() => TeacherSubjectSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Teachers Subjects', 'can_delete'))
  deleteTeacherSubject(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<TeachersSubjects> {
    return this.teacherSubjectService.deleteTeacherSubject(id);
  }
}
