import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SystemResourcesWhereInput } from 'prisma/generated/system-resources';
import { CreateSystemResourceInput } from './dto/create-system-resource.input';
import { UpdateSystemResourceInput } from './dto/update-system-resource.input';
import { SystemResourceRepository } from './system-resource.repository';

@Injectable()
export class SystemResourceService {
  constructor(private systemResourceRepository: SystemResourceRepository) {}

  async systemResources(where?: SystemResourcesWhereInput): Promise<any[]> {
    try {
      return this.systemResourceRepository.get(where);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async createSystemResource(
    createSystemResourceInput: CreateSystemResourceInput,
  ): Promise<any> {
    try {
      return this.systemResourceRepository.create(createSystemResourceInput);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async updateSystemResource(
    id: number,
    updateSystemResourceInput: UpdateSystemResourceInput,
  ): Promise<any> {
    try {
      return this.systemResourceRepository.update(
        id,
        updateSystemResourceInput,
      );
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async deleteSystemResource(id: number): Promise<any> {
    try {
      return this.systemResourceRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
