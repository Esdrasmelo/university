import { Users, UsersRole } from '@prisma/client';
import { BcryptUtils } from '../../src/utils/bcrypt.utils';
import { faker } from '@faker-js/faker';

const bcrypt = new BcryptUtils();

export const usersSeeds = async (): Promise<Users[]> => {
  const users: Users[] = [];
  const returnUserRole = (index: number): UsersRole => {
    if (index > 0 && index <= 517) return 'STUDENT';

    if (index > 517 && index <= 1034) return 'TEACHER';

    if (index > 1034) return 'USER';
  };

  for (let index = 0; index <= 1552; index++) {
    users.push({
      id: index + 1,
      name: faker.name.findName(),
      email: index + 1 === 1 ? 'admin@gmail.com' : faker.internet.email(),
      cpf: faker.random.numeric(11),
      password: await bcrypt.encrypt('123456789'),
      birth_date: new Date(),
      role: returnUserRole(index),
      created_at: new Date(),
      updated_at: new Date(),
    });
  }

  return users;
};
