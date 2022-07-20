import { Injectable } from '@nestjs/common';
import { Grades } from '@prisma/client';
import { GradesWhereInput } from 'prisma/generated/grades';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGradeInput } from './dto/create-grade.input';
import { UpdateGradeInput } from './dto/update-grade.input';

@Injectable()
export class GradeRepository {
  constructor(private prisma: PrismaService) {}

  async get(where?: GradesWhereInput): Promise<Grades[]> {
    return this.prisma.grades.findMany({
      where,
    });
  }

  async create(createGradeInput: CreateGradeInput): Promise<Grades> {
    return this.prisma.grades.create({
      data: createGradeInput,
    });
  }

  async update(
    id: number,
    updateGradeInput: UpdateGradeInput,
  ): Promise<Grades> {
    return this.prisma.grades.update({
      data: updateGradeInput,
      where: {
        id,
      },
    });
  }

  async delete(id: number): Promise<Grades> {
    return this.prisma.grades.delete({
      where: {
        id,
      },
    });
  }
}
