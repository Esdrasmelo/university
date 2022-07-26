import { Injectable } from '@nestjs/common';
import { TeachersSubjects } from '@prisma/client';
import { TeachersSubjectsWhereInput } from 'prisma/generated/teachers-subjects';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTeacherSubjectInput } from './dto/create-teacher-subject.input';
import { UpdateTeacherSubjectInput } from './dto/update-teacher-subject.input';

@Injectable()
export class TeacherSubjectRepository {
  constructor(private prisma: PrismaService) {}

  async get(where?: TeachersSubjectsWhereInput): Promise<TeachersSubjects[]> {
    return this.prisma.teachersSubjects.findMany({
      where,
    });
  }

  async create(
    createTeacherSubjectInput: CreateTeacherSubjectInput,
  ): Promise<TeachersSubjects> {
    return this.prisma.teachersSubjects.create({
      data: createTeacherSubjectInput,
    });
  }

  async update(
    id: number,
    updateTeacherSubjectInput: UpdateTeacherSubjectInput,
  ): Promise<TeachersSubjects> {
    return this.prisma.teachersSubjects.update({
      data: updateTeacherSubjectInput,
      where: {
        id,
      },
    });
  }

  async delete(id: number): Promise<TeachersSubjects> {
    return this.prisma.teachersSubjects.delete({
      where: {
        id,
      },
    });
  }
}
