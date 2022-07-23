import { TeachersSubjects, Users } from '@prisma/client';

export default class TestUtil {
  static returnValidUsers(): Omit<Users, 'password'>[] {
    const users: Omit<Users, 'password'>[] = [
      {
        id: 1,
        name: 'validName',
        email: 'valid@email.com',
        birth_date: new Date(),
        cpf: 'validCpf',
        role: 'STUDENT',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 'validName',
        email: 'valid@email.com',
        birth_date: new Date(),
        cpf: 'validCpf',
        role: 'ADMIN',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    return users;
  }

  static returnValidUser(): Users {
    const user: Users = {
      id: 1,
      name: 'validName',
      email: 'valid@email.com',
      password: 'validPassword',
      birth_date: new Date(),
      cpf: 'validCpf',
      role: 'STUDENT',
      created_at: new Date(),
      updated_at: new Date(),
    };

    return user;
  }

  static returnInvalidUsers() {
    const users = [
      {
        id: 1,
        name: 1,
        email: 1,
        birth_date: new Date(),
        cpf: 'validCpf',
        role: 'STUDENT',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 45,
        email: 32,
        birth_date: new Date(),
        cpf: 'validCpf',
        role: 'STUDENT',
        password: 123,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    return users;
  }

  static returnValidTeachersSubjects(): TeachersSubjects[] {
    const teachersSubjects: TeachersSubjects[] = [
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
    ];

    return teachersSubjects;
  }

  static returnValidTeacherSubject(): Omit<
    TeachersSubjects,
    'id' | 'created_at' | 'updated_at'
  > {
    const teacherSubject: Omit<
      TeachersSubjects,
      'id' | 'created_at' | 'updated_at'
    > = {
      teacher_id: 1,
      subject_id: 1,
    };

    return teacherSubject;
  }

  static returnInvalidTeacherSubject() {
    const teacherSubject = {
      subject_id: '1',
      teacher_id: '1',
    };

    return teacherSubject;
  }
}
