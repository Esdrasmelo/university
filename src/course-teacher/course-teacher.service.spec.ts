import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { CourseTeacherRepository } from './course-teacher.repository';
import { CourseTeacherService } from './course-teacher.service';

describe('CourseTeacherService', () => {
  let service: CourseTeacherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseTeacherService, CourseTeacherRepository, PrismaService],
    }).compile();

    service = module.get<CourseTeacherService>(CourseTeacherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
