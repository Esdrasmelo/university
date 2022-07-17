import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GradeService } from './grade.service';
import { GradeSchema } from './entities/grade.entity';
import { CreateGradeInput } from './dto/create-grade.input';
import { UpdateGradeInput } from './dto/update-grade.input';
import { GradesWhereInput } from 'prisma/generated/grades';
import { Grades } from '@prisma/client';
import { UseGuards, UseInterceptors } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { UserPermissionsGuard } from 'src/auth/guards/permissions-auth.guard';

@Resolver()
export class GradeResolver {
  constructor(private readonly gradesService: GradeService) {}

  @Query(() => [GradeSchema])
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Grades', 'can_read'))
  grades(
    @Args('where', { nullable: true }) where?: GradesWhereInput,
  ): Promise<Grades[]> {
    return this.gradesService.grades();
  }

  @Mutation(() => GradeSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Grades', 'can_create'))
  createGrade(
    @Args('createGradeInput') createGradeInput: CreateGradeInput,
  ): Promise<Grades> {
    return this.gradesService.createGrade(createGradeInput);
  }

  @Mutation(() => GradeSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Grades', 'can_update'))
  updateGrade(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateGradeInput') updateGradeInput: UpdateGradeInput,
  ): Promise<Grades> {
    return this.gradesService.updateGrade(id, updateGradeInput);
  }

  @Mutation(() => GradeSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Grades', 'can_delete'))
  deleteGrade(@Args('id', { type: () => Int }) id: number): Promise<Grades> {
    return this.gradesService.deleteGrade(id);
  }
}
