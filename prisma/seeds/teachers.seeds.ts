import { Teachers } from '@prisma/client';

export const teachersSeeds: Teachers[] = [
  {
    id: 1,
    teacher_id: 'TID-202212345',
    user_id: 7,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    teacher_id: 'TID-202223456',
    user_id: 8,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 3,
    teacher_id: 'TID-202234567',
    user_id: 9,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 4,
    teacher_id: 'TID-202245678',
    user_id: 10,
    created_at: new Date(),
    updated_at: new Date(),
  },
];
