import { SystemResources } from '@prisma/client';

export const systemResourcesSeeds: SystemResources[] = [
  {
    id: 1,
    name: 'Users',
    created_at: new Date(),
    update_at: new Date(),
  },
  {
    id: 2,
    name: 'Students',
    created_at: new Date(),
    update_at: new Date(),
  },
  {
    id: 3,
    name: 'Teachers',
    created_at: new Date(),
    update_at: new Date(),
  },
  {
    id: 4,
    name: 'Courses Categories',
    created_at: new Date(),
    update_at: new Date(),
  },
  {
    id: 5,
    name: 'Courses',
    created_at: new Date(),
    update_at: new Date(),
  },
  {
    id: 6,
    name: 'Subjects',
    created_at: new Date(),
    update_at: new Date(),
  },
  {
    id: 7,
    name: 'Courses Subjects',
    created_at: new Date(),
    update_at: new Date(),
  },
  {
    id: 8,
    name: 'Teachers Subjects',
    created_at: new Date(),
    update_at: new Date(),
  },
  {
    id: 9,
    name: 'Grades',
    created_at: new Date(),
    update_at: new Date(),
  },
];
