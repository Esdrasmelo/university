import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { TeachersSubjects } from '@prisma/client';
import { TeachersSubjectsWhereInput } from 'prisma/generated/teachers-subjects';
import { CreateTeacherSubjectInput } from './dto/create-teacher-subject.input';
import { UpdateTeacherSubjectInput } from './dto/update-teacher-subject.input';
import { TeacherSubjectRepository } from './teacher-subejct.repository';

@Injectable()
export class TeacherSubjectService {
  constructor(private teacherSubjectRepository: TeacherSubjectRepository) {}

  teachersSubejcts(
    where?: TeachersSubjectsWhereInput,
  ): Promise<TeachersSubjects[]> {
    try {
      return this.teacherSubjectRepository.get(where);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  createTeacherSubject(
    createTeacherSubjectInput: CreateTeacherSubjectInput,
  ): Promise<TeachersSubjects> {
    try {
      return this.teacherSubjectRepository.create(createTeacherSubjectInput);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  updateTeacherSubject(
    id: number,
    updateTeacherSubjectInput: UpdateTeacherSubjectInput,
  ): Promise<TeachersSubjects> {
    try {
      return this.teacherSubjectRepository.update(
        id,
        updateTeacherSubjectInput,
      );
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  deleteTeacherSubject(id: number): Promise<TeachersSubjects> {
    try {
      return this.teacherSubjectRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
