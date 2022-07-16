import { Injectable } from '@nestjs/common';
import { Permissions } from '@prisma/client';
import { PermissionsWhereInput } from 'prisma/generated/permissions';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePermissionInput } from './dtos/inputs/create-permission.input';
import { UpdatePermissionInput } from './dtos/inputs/update-permission.input';

@Injectable()
export class PermissionRepository {
  constructor(private prisma: PrismaService) {}

  get(where?: PermissionsWhereInput): Promise<Permissions[]> {
    try {
      return this.prisma.permissions.findMany({
        where,
      });
    } catch (error) {
      throw error;
    }
  }

  create(fields: CreatePermissionInput): Promise<Permissions> {
    try {
      return this.prisma.permissions.create({
        data: fields,
      });
    } catch (error) {
      throw error;
    }
  }

  update(id: number, fields: UpdatePermissionInput): Promise<Permissions> {
    try {
      return this.prisma.permissions.update({
        where: {
          id,
        },
        data: fields,
      });
    } catch (error) {
      throw error;
    }
  }

  delete(id: number): Promise<Permissions> {
    try {
      return this.prisma.permissions.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
