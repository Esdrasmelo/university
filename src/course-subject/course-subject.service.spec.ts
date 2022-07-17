import { Test, TestingModule } from '@nestjs/testing';
import { CourseSubjectService } from './course-subject.service';

describe('CourseSubjectService', () => {
  let service: CourseSubjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseSubjectService],
    }).compile();

    service = module.get<CourseSubjectService>(CourseSubjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
