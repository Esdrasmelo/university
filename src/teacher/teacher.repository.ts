import { Injectable } from '@nestjs/common';
import { Teachers } from '@prisma/client';
import {
  TeachersWhereInput,
  TeachersWhereUniqueInput,
} from 'prisma/generated/teachers';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTeacherInput } from './dto/create-teacher.input';
import { UpdateTeacherInput } from './dto/update-teacher.input';

@Injectable()
export class TeacherRepository {
  constructor(private prisma: PrismaService) {}

  async get(where?: TeachersWhereInput): Promise<Teachers[]> {
    try {
      return this.prisma.teachers.findMany({
        where,
      });
    } catch (error) {
      throw error;
    }
  }

  async getUnique(where?: TeachersWhereUniqueInput): Promise<Teachers> {
    try {
      return this.prisma.teachers.findUnique({
        where,
      });
    } catch (error) {
      throw error;
    }
  }

  async create(
    createTeacherInput: CreateTeacherInput,
    teacherId: string,
  ): Promise<Teachers> {
    try {
      const createdTeacher = await this.prisma.teachers.create({
        data: { ...createTeacherInput, teacher_id: teacherId },
      });

      this.prisma.users.update({
        where: {
          id: createTeacherInput.user_id,
        },
        data: {
          role: 'TEACHER',
        },
      });

      return createdTeacher;
    } catch (error) {
      throw error;
    }
  }

  async update(
    id: number,
    updateTeacherInput: UpdateTeacherInput,
  ): Promise<Teachers> {
    try {
      return this.prisma.teachers.update({
        data: updateTeacherInput,
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<Teachers> {
    try {
      return this.prisma.teachers.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
