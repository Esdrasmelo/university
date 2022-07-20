import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { TeacherSubjectRepository } from './teacher-subejct.repository';
import { TeacherSubjectService } from './teacher-subject.service';

describe('TeacherSubjectService', () => {
  let service: TeacherSubjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TeacherSubjectService,
        TeacherSubjectRepository,
        PrismaService,
      ],
    }).compile();

    service = module.get<TeacherSubjectService>(TeacherSubjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
