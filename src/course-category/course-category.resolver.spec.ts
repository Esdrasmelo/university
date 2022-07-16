import { Test, TestingModule } from '@nestjs/testing';
import { CourseCategoryResolver } from './course-category.resolver';
import { CourseCategoryService } from './course-category.service';

describe('CourseCategoryResolver', () => {
  let resolver: CourseCategoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseCategoryResolver, CourseCategoryService],
    }).compile();

    resolver = module.get<CourseCategoryResolver>(CourseCategoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
