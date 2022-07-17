import { Test, TestingModule } from '@nestjs/testing';
import { GradesResolver } from './grade.resolver';
import { GradeService } from './grade.service';

describe('GradesResolver', () => {
  let resolver: GradesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GradesResolver, GradeService],
    }).compile();

    resolver = module.get<GradesResolver>(GradesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
