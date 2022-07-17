import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SubjectService } from './subject.service';
import { SubjectSchema } from './entities/subject.entity';
import { CreateSubjectInput } from './dto/create-subject.input';
import { UpdateSubjectInput } from './dto/update-subject.input';
import { SubjectsWhereInput } from 'prisma/generated/subjects';
import { Subjects } from '@prisma/client';
import { UseGuards, UseInterceptors } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { UserPermissionsGuard } from 'src/auth/guards/permissions-auth.guard';

@Resolver()
export class SubjectResolver {
  constructor(private readonly subjectService: SubjectService) {}

  @Query(() => [SubjectSchema])
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Subjects', 'can_read'))
  subjects(
    @Args('where', { nullable: true }) where?: SubjectsWhereInput,
  ): Promise<Subjects[]> {
    return this.subjectService.subjects();
  }

  @Mutation(() => SubjectSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Subjects', 'can_create'))
  createSubject(
    @Args('createSubjectInput') createSubjectInput: CreateSubjectInput,
  ) {
    return this.subjectService.createSubject(createSubjectInput);
  }

  @Mutation(() => SubjectSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Subjects', 'can_update'))
  updateSubject(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateSubjectInput')
    updateSubjectInput: UpdateSubjectInput,
  ): Promise<Subjects> {
    return this.subjectService.updateSubject(id, updateSubjectInput);
  }

  @Mutation(() => SubjectSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Subjects', 'can_delete'))
  deleteSubject(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Subjects> {
    return this.subjectService.deleteSubject(id);
  }
}
