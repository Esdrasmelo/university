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
  let userService: UserService;

  const mockUserRepository = {
    get: () => {},
    getUnique: () => {},
    create: () => {},
    update: () => {},
    delete: () => {},
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        PrismaService,
        BcryptUtils,
        {
          provide: UserRepository,
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
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
      jest
        .spyOn(mockUserRepository, 'get')
        .mockImplementation(() => validUsers);

      const users = await userService.getUsers();

      expect(users).toIncludeAllMembers(validUsers);
    });

    it('should list all users providing the where parameter', async () => {
      jest
        .spyOn(mockUserRepository, 'get')
        .mockImplementation(() => [validUser]);

      const user = await userService.getUsers(whereParameter);

      expect(user).toIncludeAllMembers([validUser]);
    });

    it('should return an empty array when users are not found', async () => {
      jest.spyOn(mockUserRepository, 'get').mockImplementation(() => []);

      const notFoundUsers = await userService.getUsers();

      expect(notFoundUsers).toBeEmpty();
    });
  });

  describe('getUniqueUser', () => {
    const validUser = TestUtil.returnValidUsers()[0];
    const whereParameter: UsersWhereUniqueInput = {
      id: 1,
    };

    it('should list an unique user', async () => {
      jest
        .spyOn(mockUserRepository, 'getUnique')
        .mockImplementation(() => validUser);

      const user = await userService.getUniqueUser();

      expect(user).toStrictEqual(validUser);
    });

    it('should list an unique user providing where parameter', async () => {
      jest
        .spyOn(mockUserRepository, 'getUnique')
        .mockImplementation(() => validUser);

      const user = await userService.getUniqueUser(whereParameter);

      expect(user).toStrictEqual(validUser);
    });

    it('should return null when an user is not found', async () => {
      jest
        .spyOn(mockUserRepository, 'getUnique')
        .mockImplementation(() => null);

      const notFoundUser = await userService.getUniqueUser();

      expect(notFoundUser).toBeNull();
    });
  });

  describe('createUser', () => {
    const validUser = TestUtil.returnValidUser();

    it('should create an user', async () => {
      jest
        .spyOn(mockUserRepository, 'create')
        .mockImplementation(() => validUser);

      const createdUser = await userService.createUser(validUser);

      expect(createdUser).toMatchObject(validUser);
    });

    it('should not create an user when a required field is not provided', async () => {
      const invalidUser = TestUtil.returnInvalidUsers()[0];

      jest
        .spyOn(mockUserRepository, 'create')
        .mockRejectedValueOnce(invalidUser as never);

      await expect(
        userService.createUser(invalidUser as any),
      ).rejects.toBeInstanceOf(InternalServerErrorException);
    });

    it('should not create an user when wrong data is provided', async () => {
      const invalidUser = TestUtil.returnInvalidUsers[1];

      jest
        .spyOn(mockUserRepository, 'create')
        .mockRejectedValueOnce(invalidUser as never);

      await expect(userService.createUser(invalidUser)).rejects.toBeInstanceOf(
        InternalServerErrorException,
      );
    });

    it('should not create an user when any data is provided', async () => {
      const invalidUser = {};

      jest
        .spyOn(mockUserRepository, 'create')
        .mockRejectedValueOnce(invalidUser as never);

      await expect(
        userService.createUser(invalidUser as any),
      ).rejects.toBeInstanceOf(InternalServerErrorException);
    });
  });

  describe('updateUser', () => {
    const validUser: Omit<Users, 'password' | 'email'> =
      TestUtil.returnValidUser();
    const invalidUser = TestUtil.returnInvalidUsers()[0];
    const validUserId = 1;

    it('should update user', async () => {
      jest
        .spyOn(mockUserRepository, 'update')
        .mockImplementation(() => validUser);

      const updatedUser = await userService.updateUser(validUserId, validUser);

      expect(updatedUser).toStrictEqual(validUser);
    });

    it('should not update user when providing wrong data type', async () => {
      jest
        .spyOn(mockUserRepository, 'update')
        .mockImplementation(() => invalidUser);

      const notUpdatedUser = await userService.updateUser(
        validUserId,
        invalidUser as any,
      );

      expect(notUpdatedUser).not.toStrictEqual(validUser);
    });
  });

  describe('deleteUser', () => {
    const validUser = TestUtil.returnValidUsers()[0];
    const validUserId = 1;

    it('should delete an user', async () => {
      jest
        .spyOn(mockUserRepository, 'delete')
        .mockImplementation(() => validUser);

      const deletedUser = await userService.deleteUser(validUserId);

      expect(deletedUser).toEqual(deletedUser);
    });

    it('should throw an expection when an non existing user id is provided', async () => {
      const nonExistingUserId = 99999;

      jest
        .spyOn(mockUserRepository, 'delete')
        .mockRejectedValueOnce(new InternalServerErrorException() as never);

      await expect(
        userService.deleteUser(nonExistingUserId),
      ).rejects.toBeInstanceOf(InternalServerErrorException);
    });
  });
});
