import { TeachersSubjects } from '@prisma/client';

export const teachersSubjectsSeeds: TeachersSubjects[] = [
  {
    id: 1,
    teacher_id: 1,
    subject_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    teacher_id: 2,
    subject_id: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 3,
    teacher_id: 3,
    subject_id: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 4,
    teacher_id: 4,
    subject_id: 4,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 5,
    teacher_id: 3,
    subject_id: 5,
    created_at: new Date(),
    updated_at: new Date(),
  },
];
