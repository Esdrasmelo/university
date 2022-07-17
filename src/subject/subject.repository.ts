import { Injectable } from '@nestjs/common';
import { Subjects } from '@prisma/client';
import { SubjectsWhereInput } from 'prisma/generated/subjects';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSubjectInput } from './dto/create-subject.input';
import { UpdateSubjectInput } from './dto/update-subject.input';

@Injectable()
export class SubjectRepository {
  constructor(private prisma: PrismaService) {}

  async get(where?: SubjectsWhereInput): Promise<Subjects[]> {
    try {
      return this.prisma.subjects.findMany({
        where,
      });
    } catch (error) {
      throw error;
    }
  }

  async create(createSubjectInput: CreateSubjectInput): Promise<Subjects> {
    try {
      return this.prisma.subjects.create({
        data: createSubjectInput,
      });
    } catch (error) {
      throw error;
    }
  }

  async update(
    id: number,
    updateSubjectInput: UpdateSubjectInput,
  ): Promise<Subjects> {
    try {
      return this.prisma.subjects.update({
        data: updateSubjectInput,
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<Subjects> {
    try {
      return this.prisma.subjects.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
