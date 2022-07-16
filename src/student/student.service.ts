import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Students } from '@prisma/client';
import {
  StudentsWhereInput,
  StudentsWhereUniqueInput,
} from 'prisma/generated/students';
import { CreateStudentInput } from './dto/inputs/create-student.input';
import { UpdateStudentInput } from './dto/inputs/update-student.input';
import { StudentRepository } from './student.repository';

@Injectable()
export class StudentService {
  constructor(private studentRepository: StudentRepository) {}

  private async studentIdExists(studentId: string) {
    try {
      const uniqueStudentId = await this.getUniqueStudent({
        student_id: studentId,
      });

      if (!uniqueStudentId) return false;

      return true;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  private async generateStudentId(): Promise<string> {
    let definitiveStudentId: string;
    let exists = true;

    while (exists) {
      const randomNumber = (Math.random() * 100000).toFixed(0);
      const currentYear = new Date().getFullYear();
      const studentId = `SID-${currentYear}${randomNumber}`;
      const studentIdAlreadyExists = await this.studentIdExists(studentId);

      if (!studentIdAlreadyExists) {
        exists = false;
        definitiveStudentId = studentId;

        break;
      }
    }

    return definitiveStudentId;
  }

  async getStudents(where?: StudentsWhereInput): Promise<Students[]> {
    try {
      return this.studentRepository.get(where);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async getUniqueStudent(where?: StudentsWhereUniqueInput) {
    try {
      return this.studentRepository.getUnique(where);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Students> {
    try {
      const studentId = await this.generateStudentId();

      return this.studentRepository.create(createStudentInput, studentId);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async updateStudent(
    id: number,
    updateStudentInput: UpdateStudentInput,
  ): Promise<Students> {
    try {
      return this.studentRepository.update(id, updateStudentInput);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async deleteStudent(id: number): Promise<Students> {
    try {
      return this.studentRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
