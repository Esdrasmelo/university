import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { SystemResourceRepository } from './system-resource.repository';
import { SystemResourceService } from './system-resource.service';

describe('SystemResourceService', () => {
  let service: SystemResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SystemResourceService,
        SystemResourceRepository,
        PrismaService,
      ],
    }).compile();

    service = module.get<SystemResourceService>(SystemResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
