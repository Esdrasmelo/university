import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentSchema } from './entities/student.entity';
import { CreateStudentInput } from './dto/inputs/create-student.input';
import { UpdateStudentInput } from './dto/inputs/update-student.input';
import { StudentsWhereInput } from 'prisma/generated/students';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { UseGuards, UseInterceptors } from '@nestjs/common';
import { UserPermissionsGuard } from '../auth/guards/permissions-auth.guard';
import { Students } from '@prisma/client';
import { StudentsGuard } from '../auth/guards/students-auth.guard';

@Resolver()
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Students', 'can_read'))
  @Query(() => [StudentSchema])
  async students(where?: StudentsWhereInput): Promise<Students[]> {
    return this.studentService.getStudents(where);
  }

  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Students', 'can_create'))
  @Mutation(() => StudentSchema)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Promise<Students> {
    return this.studentService.createStudent(createStudentInput);
  }

  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new StudentsGuard('can_update'))
  @Mutation(() => StudentSchema)
  async updateStudent(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateStudentInput') updateStudentInput: UpdateStudentInput,
  ): Promise<Students> {
    return this.studentService.updateStudent(id, updateStudentInput);
  }

  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new StudentsGuard('can_delete'))
  @Mutation(() => StudentSchema)
  async deleteStudent(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Students> {
    return this.studentService.deleteStudent(id);
  }
}
