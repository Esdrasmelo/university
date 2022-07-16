import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Teachers } from '@prisma/client';
import {
  TeachersWhereInput,
  TeachersWhereUniqueInput,
} from 'prisma/generated/teachers';
import { CreateTeacherInput } from './dto/inputs/create-teacher.input';
import { UpdateTeacherInput } from './dto/inputs/update-teacher.input';
import { TeacherRepository } from './teacher.repository';

@Injectable()
export class TeacherService {
  constructor(private teacherRepository: TeacherRepository) {}

  private async teacherIdExists(teacherId: string) {
    try {
      const uniqueTeacherId = await this.getUniqueTeacher({
        teacher_id: teacherId,
      });

      if (!uniqueTeacherId) return false;

      return true;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  private async generateTeacherId(): Promise<string> {
    let definitiveTeacherId: string;
    let exists = true;

    while (exists) {
      const randomNumber = (Math.random() * 100000).toFixed(0);
      const currentYear = new Date().getFullYear();
      const teacherId = `TID-${currentYear}${randomNumber}`;
      const teacherIdAlreadyExists = await this.teacherIdExists(teacherId);

      if (!teacherIdAlreadyExists) {
        exists = false;
        definitiveTeacherId = teacherId;

        break;
      }
    }

    return definitiveTeacherId;
  }

  async getTeachers(where?: TeachersWhereInput): Promise<Teachers[]> {
    try {
      return this.teacherRepository.get(where);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getUniqueTeacher(where?: TeachersWhereUniqueInput): Promise<Teachers> {
    try {
      return this.teacherRepository.getUnique(where);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async createTeacher(
    createTeacherInput: CreateTeacherInput,
  ): Promise<Teachers> {
    try {
      const teacherId = await this.generateTeacherId();

      return this.teacherRepository.create(createTeacherInput, teacherId);
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
