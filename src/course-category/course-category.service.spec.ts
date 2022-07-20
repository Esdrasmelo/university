import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { CourseCategoryRepository } from './course-category.repository';
import { CourseCategoryService } from './course-category.service';

describe('CourseCategoryService', () => {
  let service: CourseCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CourseCategoryService,
        CourseCategoryRepository,
        PrismaService,
      ],
    }).compile();

    service = module.get<CourseCategoryService>(CourseCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
