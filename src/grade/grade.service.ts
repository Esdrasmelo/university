import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Grades } from '@prisma/client';
import { GradesWhereInput } from 'prisma/generated/grades';
import { CreateGradeInput } from './dto/create-grade.input';
import { UpdateGradeInput } from './dto/update-grade.input';
import { GradeRepository } from './grade.repository';

@Injectable()
export class GradeService {
  constructor(private gradeRepository: GradeRepository) {}

  async grades(where?: GradesWhereInput): Promise<Grades[]> {
    try {
      return this.gradeRepository.get(where);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async createGrade(createGradeInput: CreateGradeInput): Promise<Grades> {
    try {
      return this.gradeRepository.create(createGradeInput);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async updateGrade(
    id: number,
    updateGradeInput: UpdateGradeInput,
  ): Promise<Grades> {
    try {
      return this.gradeRepository.update(id, updateGradeInput);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async deleteGrade(id: number): Promise<Grades> {
    try {
      return this.gradeRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
