import { Test, TestingModule } from '@nestjs/testing';
import { CourseSubjectResolver } from './course-subject.resolver';
import { CourseSubjectService } from './course-subject.service';

describe('CourseSubjectResolver', () => {
  let resolver: CourseSubjectResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseSubjectResolver, CourseSubjectService],
    }).compile();

    resolver = module.get<CourseSubjectResolver>(CourseSubjectResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
