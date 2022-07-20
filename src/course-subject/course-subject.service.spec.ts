import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { CourseSubjectRepository } from './course-subject.repository';
import { CourseSubjectService } from './course-subject.service';

describe('CourseSubjectService', () => {
  let service: CourseSubjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseSubjectService, CourseSubjectRepository, PrismaService],
    }).compile();

    service = module.get<CourseSubjectService>(CourseSubjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
