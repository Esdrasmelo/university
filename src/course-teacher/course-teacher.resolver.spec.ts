import { Test, TestingModule } from '@nestjs/testing';
import { CourseTeacherResolver } from './course-teacher.resolver';
import { CourseTeacherService } from './course-teacher.service';

describe('CourseTeacherResolver', () => {
  let resolver: CourseTeacherResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseTeacherResolver, CourseTeacherService],
    }).compile();

    resolver = module.get<CourseTeacherResolver>(CourseTeacherResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
