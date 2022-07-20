import { Test, TestingModule } from '@nestjs/testing';
import { BcryptUtils } from '../utils/bcrypt.utils';
import { PrismaService } from '../prisma/prisma.service';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import TestUtil from '../common/test/test-util';
import {
  UsersWhereInput,
  UsersWhereUniqueInput,
} from '../../prisma/generated/users';
import 'jest-extended';
import { InternalServerErrorException } from '@nestjs/common';
import { Users } from '@prisma/client';

describe('UserService', () => {
  let service: UserService;

  const mockRepository = {
    get: jest.fn(),
    getUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        PrismaService,
        BcryptUtils,
        {
          provide: UserRepository,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  beforeEach(() => {
    mockRepository.get.mockReset();
    mockRepository.getUnique.mockReset();
    mockRepository.create.mockReset();
    mockRepository.update.mockReset();
    mockRepository.delete.mockReset();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getUsers', () => {
    const validUsers = TestUtil.returnValidUsers();
    const invalidUser = TestUtil.returnInvalidUsers();
    const validUser = TestUtil.returnValidUsers()[0];
    const whereParameter: UsersWhereInput = {
      role: {
        equals: 'STUDENT',
      },
    };

    it('should list all users', async () => {
      mockRepository.get.mockReturnValue(validUsers);

      const users = await service.getUsers();

      expect(users).toIncludeAllMembers(validUsers);
    });

    it('should list all users providing the where parameter', async () => {
      mockRepository.get.mockReturnValue([validUser]);

      const user = await service.getUsers(whereParameter);

      expect(user).toIncludeAllMembers([validUser]);
    });

    it('should not pass when returned invalid users', async () => {
      mockRepository.get.mockReturnValue(invalidUser);

      const users = await service.getUsers();

      expect(users).not.toEqual(validUsers);
    });

    it('should not pass when users are not found', async () => {
      mockRepository.get.mockReturnValue([]);

      await expect(service.getUsers()).resolves.toBeEmpty();
    });
  });

  describe('getUniqueUser', () => {
    const validUser = TestUtil.returnValidUsers()[0];
    const whereParameter: UsersWhereUniqueInput = {
      id: 1,
    };
    const invalidUser = TestUtil.returnInvalidUsers()[0];

    it('should list an unique user', async () => {
      mockRepository.getUnique.mockReturnValue(validUser);

      const user = await service.getUniqueUser();

      expect(user).toStrictEqual(validUser);
    });

    it('should list an unique user providing where parameter', async () => {
      mockRepository.getUnique.mockReturnValue(validUser);

      const user = await service.getUniqueUser(whereParameter);

      expect(user).toStrictEqual(validUser);
    });

    it('should not pass when user has invalid values', async () => {
      mockRepository.getUnique.mockReturnValue(invalidUser);

      const user = await service.getUniqueUser();

      expect(user).not.toStrictEqual(validUser);
    });

    it('should not pass when user is not found', async () => {
      mockRepository.getUnique.mockReturnValue(null);

      await expect(service.getUniqueUser()).resolves.toBeNull();
    });
  });

  describe('createUser', () => {
    const validUser = TestUtil.returnValidUser();

    it('should create an user', async () => {
      mockRepository.create.mockReturnValue(validUser);

      const createdUser = await service.createUser(validUser);

      expect(createdUser).toMatchObject(validUser);
    });

    it('should not create an user when a required field is not provided', async () => {
      const invalidUser = TestUtil.returnInvalidUsers()[0];

      mockRepository.create.mockReturnValue(invalidUser);

      await expect(
        service.createUser(invalidUser as any),
      ).rejects.toBeInstanceOf(InternalServerErrorException);
    });

    it('should not create an user when wrong data is provided', async () => {
      const invalidUser = TestUtil.returnInvalidUsers[1];

      mockRepository.create.mockReturnValue(invalidUser);

      await expect(service.createUser(invalidUser)).rejects.toBeInstanceOf(
        InternalServerErrorException,
      );
    });

    it('should not create an user when any data is provided', async () => {
      const invalidUser = {};

      mockRepository.create.mockReturnValue(invalidUser);

      await expect(
        service.createUser(invalidUser as any),
      ).rejects.toBeInstanceOf(InternalServerErrorException);
    });
  });

  describe('updateUser', () => {
    const validId = 1;

    it('should update user', async () => {
      const validUser: Omit<Users, 'password' | 'email'> =
        TestUtil.returnValidUser();

      mockRepository.update.mockReturnValue(validUser);

      const updatedUser = await service.updateUser(validId, validUser);

      expect(updatedUser).toStrictEqual(validUser);
    });
  });
});
