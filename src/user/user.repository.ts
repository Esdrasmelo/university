import { Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import { UsersWhereInput, UsersWhereUniqueInput } from 'prisma/generated/users';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserInput, CreateUserInput } from './dto';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  get(where?: UsersWhereInput): Promise<Users[]> {
    try {
      return this.prisma.users.findMany({
        where,
      });
    } catch (error) {
      throw error;
    }
  }

  getUnique(where?: UsersWhereUniqueInput): Promise<Users> {
    try {
      return this.prisma.users.findUnique({
        where,
      });
    } catch (error) {
      throw error;
    }
  }

  create(fields: CreateUserInput): Promise<Users> {
    try {
      return this.prisma.users.create({
        data: fields,
      });
    } catch (error) {
      throw error;
    }
  }

  update(id: number, fields: UpdateUserInput): Promise<Users> {
    try {
      return this.prisma.users.update({
        data: fields,
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  delete(id: number): Promise<Users> {
    try {
      return this.prisma.users.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
