import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Permissions } from '@prisma/client';
import { PermissionsWhereInput } from 'prisma/generated/permissions';
import { CreatePermissionInput } from './dtos/inputs/create-permission.input';
import { UpdatePermissionInput } from './dtos/inputs/update-permission.input';
import { PermissionRepository } from './permission.repository';

@Injectable()
export class PermissionService {
  constructor(private permissionRepository: PermissionRepository) {}

  getPermissions(where?: PermissionsWhereInput): Promise<Permissions[]> {
    try {
      return this.permissionRepository.get(where);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  createPermission(fields: CreatePermissionInput): Promise<Permissions> {
    try {
      return this.permissionRepository.create(fields);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  updatePermission(
    id: number,
    fields: UpdatePermissionInput,
  ): Promise<Permissions> {
    try {
      return this.permissionRepository.update(id, fields);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  deletePermission(id: number): Promise<Permissions> {
    try {
      return this.permissionRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
