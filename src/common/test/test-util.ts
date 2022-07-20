import { Users } from '@prisma/client';

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
}
