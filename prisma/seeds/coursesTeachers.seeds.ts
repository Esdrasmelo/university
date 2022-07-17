import { CoursesTeachers } from '@prisma/client';

export const coursesTeachersSeeds: CoursesTeachers[] = [
  {
    id: 1,
    course_id: 1,
    teacher_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    course_id: 2,
    teacher_id: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 3,
    course_id: 3,
    teacher_id: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 4,
    course_id: 4,
    teacher_id: 4,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 5,
    course_id: 5,
    teacher_id: 4,
    created_at: new Date(),
    updated_at: new Date(),
  },
];
