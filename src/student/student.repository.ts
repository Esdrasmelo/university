import { Injectable } from '@nestjs/common';
import { Students } from '@prisma/client';
import {
  StudentsWhereInput,
  StudentsWhereUniqueInput,
} from 'prisma/generated/students';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';

@Injectable()
export class StudentRepository {
  constructor(private prisma: PrismaService) {}

  async get(where?: StudentsWhereInput): Promise<Students[]> {
    try {
      return this.prisma.students.findMany({
        where,
      });
    } catch (error) {
      throw error;
    }
  }

  async getUnique(where?: StudentsWhereUniqueInput) {
    try {
      return this.prisma.students.findUnique({
        where,
      });
    } catch (error) {
      throw error;
    }
  }

  async create(
    createStudentInput: CreateStudentInput,
    studentId: string,
  ): Promise<Students> {
    try {
      return this.prisma.students.create({
        data: {
          ...createStudentInput,
          student_id: studentId,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async update(
    id: number,
    updateStudentInput: UpdateStudentInput,
  ): Promise<Students> {
    try {
      return this.prisma.students.update({
        data: updateStudentInput,
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<Students> {
    try {
      return this.prisma.students.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
