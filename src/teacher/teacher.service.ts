import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Teachers } from '@prisma/client';
import { TeachersWhereInput } from 'prisma/generated/teachers';
import { CreateTeacherInput } from './dto/create-teacher.input';
import { UpdateTeacherInput } from './dto/update-teacher.input';
import { TeacherRepository } from './teacher.repository';

@Injectable()
export class TeacherService {
  constructor(private teacherRepository: TeacherRepository) {}

  async getTeachers(where?: TeachersWhereInput): Promise<Teachers[]> {
    try {
      return this.teacherRepository.get(where);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async createTeacher(
    createTeacherInput: CreateTeacherInput,
  ): Promise<Teachers> {
    try {
      return this.teacherRepository.create(createTeacherInput);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateTeacher(
    id: number,
    updateTeacherInput: UpdateTeacherInput,
  ): Promise<Teachers> {
    try {
      return this.teacherRepository.update(id, updateTeacherInput);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async deleteTeacher(id: number): Promise<Teachers> {
    try {
      return this.teacherRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
