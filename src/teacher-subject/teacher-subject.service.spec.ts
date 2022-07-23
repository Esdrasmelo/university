import { InternalServerErrorException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { rejects } from 'assert';
import { TeachersSubjectsWhereInput } from '../../prisma/generated/teachers-subjects';
import TestUtil from '../common/test/test-util';
import { PrismaService } from '../prisma/prisma.service';
import { TeacherSubjectRepository } from './teacher-subejct.repository';
import { TeacherSubjectService } from './teacher-subject.service';

describe('TeacherSubjectService', () => {
  let teacherSubjectService: TeacherSubjectService;

  const mockTeacherSubjectRepository = {
    get: () => {},
    create: () => {},
    update: () => {},
    delete: () => {},
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TeacherSubjectService,
        {
          provide: TeacherSubjectRepository,
          useValue: mockTeacherSubjectRepository,
        },
        PrismaService,
      ],
    }).compile();

    teacherSubjectService = module.get<TeacherSubjectService>(
      TeacherSubjectService,
    );
  });

  it('should be defined', () => {
    expect(teacherSubjectService).toBeDefined();
  });

  describe('getTeachersSubjects', () => {
    const validTeachersSubjects = TestUtil.returnValidTeachersSubjects();
    const whereParameter: TeachersSubjectsWhereInput = {
      teacher_id: {
        equals: 1,
      },
    };

    it('should list all teacher subjects data', async () => {
      jest
        .spyOn(mockTeacherSubjectRepository, 'get')
        .mockImplementation(() => validTeachersSubjects);

      const teachersSubjects = await teacherSubjectService.teachersSubejcts();

      expect(teachersSubjects).toStrictEqual(validTeachersSubjects);
    });

    it('should return an empty array if no teacher subject is found', async () => {
      const emptyArray = [];

      jest
        .spyOn(mockTeacherSubjectRepository, 'get')
        .mockImplementation(() => emptyArray);

      const notFoundTeachersSubjects =
        await teacherSubjectService.teachersSubejcts();

      expect(notFoundTeachersSubjects).toBeEmpty();
    });

    it('should find users when where parameter is provided', async () => {
      jest
        .spyOn(mockTeacherSubjectRepository, 'get')
        .mockImplementation(() => validTeachersSubjects);

      const teachersSubjects = await teacherSubjectService.teachersSubejcts(
        whereParameter,
      );

      expect(teachersSubjects).toStrictEqual(validTeachersSubjects);
    });

    it('should throw an exception', async () => {
      jest
        .spyOn(mockTeacherSubjectRepository, 'get')
        .mockRejectedValueOnce(new InternalServerErrorException() as never);

      await expect(
        teacherSubjectService.teachersSubejcts(),
      ).rejects.toThrowError();
    });
  });

  describe('createTeacherSubject', () => {
    const validTeacherSubject = TestUtil.returnValidTeacherSubject();
    const validTeacherSubjectReturn = TestUtil.returnValidTeachersSubjects()[0];
    const invalidTeacherSubject = TestUtil.returnInvalidTeacherSubject();

    it('should create a teacher subject', async () => {
      jest
        .spyOn(mockTeacherSubjectRepository, 'create')
        .mockImplementation(() => validTeacherSubjectReturn);

      const createdTeacherSubject =
        await teacherSubjectService.createTeacherSubject(validTeacherSubject);

      expect(createdTeacherSubject).toMatchObject(validTeacherSubject);
    });

    it('should not create a teacher subject if the provided data contains wrong types', async () => {
      jest
        .spyOn(mockTeacherSubjectRepository, 'create')
        .mockRejectedValueOnce(invalidTeacherSubject as never);

      await expect(
        teacherSubjectService.createTeacherSubject(
          invalidTeacherSubject as any,
        ),
      ).rejects.not.toStrictEqual(validTeacherSubjectReturn);
    });

    it('should not create a teacher subject if no data is provided', async () => {
      const invalidData = {};

      jest
        .spyOn(mockTeacherSubjectRepository, 'create')
        .mockRejectedValueOnce(new InternalServerErrorException() as never);

      await expect(
        teacherSubjectService.createTeacherSubject(invalidData as any),
      ).rejects.toBeInstanceOf(InternalServerErrorException);
    });
  });

  describe('updateTeacherSubject', () => {
    const validTeacherSubject = TestUtil.returnValidTeacherSubject();
    const validTeacherSubjectReturn = TestUtil.returnValidTeachersSubjects()[0];
    const validTeacherSubjectId = 1;
    const invalidTeacherSubjectId = 9999;

    it('should update a teacher subject', async () => {
      jest
        .spyOn(mockTeacherSubjectRepository, 'update')
        .mockImplementation(() => validTeacherSubjectReturn);

      const updateTeacherSubject =
        await teacherSubjectService.updateTeacherSubject(
          validTeacherSubjectId,
          validTeacherSubject,
        );

      expect(updateTeacherSubject).toMatchObject(validTeacherSubject);

      expect(updateTeacherSubject).not.toBeInstanceOf(
        InternalServerErrorException,
      );
    });

    it('should not update a teacher subject when an invalid user id is provided', async () => {
      jest
        .spyOn(mockTeacherSubjectRepository, 'update')
        .mockRejectedValueOnce(new InternalServerErrorException() as never);

      await expect(
        teacherSubjectService.updateTeacherSubject(
          invalidTeacherSubjectId,
          validTeacherSubject,
        ),
      ).rejects.toBeInstanceOf(InternalServerErrorException);
    });

    it('should not update a teacher subject when an empty object is provided', async () => {
      const invalidData = {};

      jest
        .spyOn(mockTeacherSubjectRepository, 'update')
        .mockRejectedValueOnce(invalidData as never);

      await expect(
        teacherSubjectService.updateTeacherSubject(
          validTeacherSubjectId,
          invalidData,
        ),
      ).rejects.toBeEmptyObject();
    });
  });

  describe('deleteTeacherSubject', () => {
    const validTeacherSubjectReturn = TestUtil.returnValidTeachersSubjects()[0];
    const validTeacherSubjectId = 1;
    const invalidTeacherSubjectId = 999999;

    it('should delete a teacher subject', async () => {
      jest
        .spyOn(mockTeacherSubjectRepository, 'delete')
        .mockImplementation(() => validTeacherSubjectReturn);

      const deletedTeacherSubject =
        await teacherSubjectService.deleteTeacherSubject(validTeacherSubjectId);

      expect(deletedTeacherSubject).toMatchObject(validTeacherSubjectReturn);
    });

    it('should not delete a teacher subject when an invalid teacher subject id', async () => {
      jest
        .spyOn(mockTeacherSubjectRepository, 'delete')
        .mockRejectedValueOnce(new InternalServerErrorException() as never);

      await expect(
        teacherSubjectService.deleteTeacherSubject(invalidTeacherSubjectId),
      ).rejects.toBeInstanceOf(InternalServerErrorException);
    });
  });
});
