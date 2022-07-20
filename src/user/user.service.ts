import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Users } from '@prisma/client';
import {
  UsersWhereInput,
  UsersWhereUniqueInput,
} from '../../prisma/generated/users';
import { BcryptUtils } from '../utils/bcrypt.utils';
import { CreateUserInput } from './dto/inputs/create-user.input';
import { UpdateUserInput } from './dto/inputs/update-user.input';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private bcryptUtils: BcryptUtils,
  ) {}

  async getUsers(where?: UsersWhereInput): Promise<Users[]> {
    try {
      const users = await this.userRepository.get(where);

      return users;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async getUniqueUser(where?: UsersWhereUniqueInput): Promise<Users> {
    try {
      const user = await this.userRepository.getUnique(where);

      return user;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async createUser(createUserInput: CreateUserInput): Promise<Users> {
    try {
      const { password, ...user_fields } = createUserInput;

      const encryptedPassword = await this.bcryptUtils.encrypt(password);

      const createdUser = await this.userRepository.create({
        password: encryptedPassword,
        ...user_fields,
      });

      return createdUser;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async updateUser(
    id: number,
    updateUserInput: UpdateUserInput,
  ): Promise<Users> {
    try {
      const updatedUser = await this.userRepository.update(id, updateUserInput);

      return updatedUser;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async deleteUser(id: number): Promise<Users> {
    try {
      const deletedUser = await this.userRepository.delete(id);

      return deletedUser;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
