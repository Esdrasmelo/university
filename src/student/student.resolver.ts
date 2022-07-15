import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentSchema } from './entities/student.entity';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { StudentsWhereInput } from 'prisma/generated/students';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { UseGuards, UseInterceptors } from '@nestjs/common';
import { UserPermissions } from 'src/auth/guards/permissions-auth.guard';
import { Students } from '@prisma/client';
import { StudentsGuard } from 'src/auth/guards/students-auth.guard';

@Resolver()
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissions('Students', 'can_read'))
  @Query(() => [StudentSchema])
  async students(where?: StudentsWhereInput): Promise<Students[]> {
    return this.studentService.getStudents(where);
  }

  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissions('Students', 'can_create'))
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
