import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TeacherService } from './teacher.service';
import { TeacherSchema } from './entities/teacher.entity';
import { CreateTeacherInput } from './dto/inputs/create-teacher.input';
import { UpdateTeacherInput } from './dto/inputs/update-teacher.input';
import { TeachersWhereInput } from 'prisma/generated/teachers';
import { Teachers } from '@prisma/client';
import { UseGuards, UseInterceptors } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { UserPermissionsGuard } from '../auth/guards/permissions-auth.guard';
import { TeachersGuard } from '../auth/guards/teachers-auth.guard';

@Resolver()
export class TeacherResolver {
  constructor(private readonly teacherService: TeacherService) {}

  @Query(() => [TeacherSchema])
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Teachers', 'can_read'))
  async teachers(
    @Args('where', { nullable: true }) where?: TeachersWhereInput,
  ): Promise<Teachers[]> {
    return this.teacherService.getTeachers(where);
  }

  @Mutation(() => TeacherSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Teachers', 'can_create'))
  async createTeacher(
    @Args('createTeacherInput') createTeacherInput: CreateTeacherInput,
  ): Promise<Teachers> {
    return this.teacherService.createTeacher(createTeacherInput);
  }

  @Mutation(() => TeacherSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new TeachersGuard('can_update'))
  async updateTeacher(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateTeacherInput')
    updateTeacherInput: UpdateTeacherInput,
  ): Promise<Teachers> {
    return this.teacherService.updateTeacher(id, updateTeacherInput);
  }

  @Mutation(() => TeacherSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new TeachersGuard('can_delete'))
  async deleteTeacher(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Teachers> {
    return this.teacherService.deleteTeacher(id);
  }
}
