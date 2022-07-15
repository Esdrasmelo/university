import { Students } from '@prisma/client';

export const studentsSeeds: Students[] = [
  {
    id: 1,
    user_id: 2,
    student_id: 'SID-202223564',
    course_id: 1,
    semester: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    user_id: 3,
    student_id: 'SID-202246744',
    course_id: 1,
    semester: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 3,
    user_id: 4,
    student_id: 'SID-202257958',
    course_id: 1,
    semester: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 4,
    user_id: 5,
    student_id: 'SID-202213281',
    course_id: 1,
    semester: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 5,
    user_id: 6,
    student_id: 'SID-202298021',
    course_id: 1,
    semester: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
];
