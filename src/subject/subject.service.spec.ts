import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { SubjectRepository } from './subject.repository';
import { SubjectService } from './subject.service';

describe('SubjectService', () => {
  let service: SubjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubjectService, SubjectRepository, PrismaService],
    }).compile();

    service = module.get<SubjectService>(SubjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
