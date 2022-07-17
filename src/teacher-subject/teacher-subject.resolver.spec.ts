import { Test, TestingModule } from '@nestjs/testing';
import { TeacherSubjectResolver } from './teacher-subject.resolver';
import { TeacherSubjectService } from './teacher-subject.service';

describe('TeacherSubjectResolver', () => {
  let resolver: TeacherSubjectResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeacherSubjectResolver, TeacherSubjectService],
    }).compile();

    resolver = module.get<TeacherSubjectResolver>(TeacherSubjectResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
