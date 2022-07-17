import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Subjects } from '@prisma/client';
import { SubjectsWhereInput } from 'prisma/generated/subjects';
import { CreateSubjectInput } from './dto/create-subject.input';
import { UpdateSubjectInput } from './dto/update-subject.input';
import { SubjectRepository } from './subject.repository';

@Injectable()
export class SubjectService {
  constructor(private subjectRepository: SubjectRepository) {}

  async subjects(where?: SubjectsWhereInput): Promise<Subjects[]> {
    try {
      return this.subjectRepository.get(where);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async createSubject(
    createSubjectInput: CreateSubjectInput,
  ): Promise<Subjects> {
    try {
      return this.subjectRepository.create(createSubjectInput);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async updateSubject(
    id: number,
    updateSubjectInput: UpdateSubjectInput,
  ): Promise<Subjects> {
    try {
      return this.subjectRepository.update(id, updateSubjectInput);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async deleteSubject(id: number): Promise<Subjects> {
    try {
      return this.subjectRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
