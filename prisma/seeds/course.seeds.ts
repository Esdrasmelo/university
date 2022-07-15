import { Courses } from '@prisma/client';

export const coursesSeeds: Courses[] = [
  {
    id: 1,
    name: 'Course 1',
    category_id: 1,
    duration: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    name: 'Course 2',
    category_id: 2,
    duration: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 3,
    name: 'Course 3',
    category_id: 3,
    duration: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 4,
    name: 'Course 4',
    category_id: 4,
    duration: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 5,
    name: 'Course 5',
    category_id: 5,
    duration: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
];
