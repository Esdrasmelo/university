import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { TeachersSubjects } from '@prisma/client';
import { parseRedisReturn, setRedisKey } from '../utils/redis/redis';
import { CreateTeacherSubjectInput } from './dto/create-teacher-subject.input';
import { UpdateTeacherSubjectInput } from './dto/update-teacher-subject.input';
import { TeacherSubjectRepository } from './teacher-subejct.repository';

@Injectable()
export class TeacherSubjectService {
  constructor(private teacherSubjectRepository: TeacherSubjectRepository) {}

  async teachersSubejcts(redis: any): Promise<TeachersSubjects[]> {
    try {
      const getTeachersSubjectsRedisKey = await redis.get(
        'getTeachersSubjects',
      );

      if (!getTeachersSubjectsRedisKey) {
        const getTeachersSubejcts = await this.teacherSubjectRepository.get();

        setRedisKey('getTeachersSubjects', '300', getTeachersSubejcts, redis);

        return getTeachersSubejcts;
      }

      const teachersSubjectReturn = parseRedisReturn(
        getTeachersSubjectsRedisKey,
      );

      return teachersSubjectReturn;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async teacherSubejct(teacherSubjectId: number): Promise<TeachersSubjects> {
    try {
      return this.teacherSubjectRepository.getUnique(teacherSubjectId);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async createTeacherSubject(
    createTeacherSubjectInput: CreateTeacherSubjectInput,
  ): Promise<TeachersSubjects> {
    try {
      return this.teacherSubjectRepository.create(createTeacherSubjectInput);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async updateTeacherSubject(
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

  async deleteTeacherSubject(id: number): Promise<TeachersSubjects> {
    try {
      return this.teacherSubjectRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
