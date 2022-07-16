import { Test, TestingModule } from '@nestjs/testing';
import { SystemResourceService } from './system-resource.service';

describe('SystemResourceService', () => {
  let service: SystemResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemResourceService],
    }).compile();

    service = module.get<SystemResourceService>(SystemResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
