import { Injectable } from '@nestjs/common';
import { SystemResourcesWhereInput } from 'prisma/generated/system-resources';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSystemResourceInput } from './dto/create-system-resource.input';
import { UpdateSystemResourceInput } from './dto/update-system-resource.input';

@Injectable()
export class SystemResourceRepository {
  constructor(private prisma: PrismaService) {}

  async get(where?: SystemResourcesWhereInput): Promise<any> {
    try {
      return this.prisma.systemResources.findMany({
        where,
      });
    } catch (error) {
      throw error;
    }
  }

  async create(
    createSystemResourceInput: CreateSystemResourceInput,
  ): Promise<any> {
    try {
      return this.prisma.systemResources.create({
        data: createSystemResourceInput,
      });
    } catch (error) {
      throw error;
    }
  }

  async update(
    id: number,
    updateSystemResourceInput: UpdateSystemResourceInput,
  ): Promise<any> {
    try {
      return this.prisma.systemResources.update({
        data: updateSystemResourceInput,
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<any> {
    try {
      return this.prisma.systemResources.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
