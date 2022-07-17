import { Test, TestingModule } from '@nestjs/testing';
import { CourseTeacherService } from './course-teacher.service';

describe('CourseTeacherService', () => {
  let service: CourseTeacherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseTeacherService],
    }).compile();

    service = module.get<CourseTeacherService>(CourseTeacherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
