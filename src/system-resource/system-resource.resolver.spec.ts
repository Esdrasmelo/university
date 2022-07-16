import { Test, TestingModule } from '@nestjs/testing';
import { SystemResourceResolver } from './system-resource.resolver';
import { SystemResourceService } from './system-resource.service';

describe('SystemResourceResolver', () => {
  let resolver: SystemResourceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemResourceResolver, SystemResourceService],
    }).compile();

    resolver = module.get<SystemResourceResolver>(SystemResourceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
