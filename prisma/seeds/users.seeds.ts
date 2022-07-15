import { Users } from '@prisma/client';
import { BcryptUtils } from '../../src/utils/bcrypt.utils';

const bcrypt = new BcryptUtils();

export const usersSeeds = async (): Promise<Users[]> => {
  return [
    {
      id: 1,
      name: 'Esdras de Melo Motta',
      email: 'emelomotta@gmail.com',
      cpf: '49161638854',
      password: await bcrypt.encrypt('123456789'),
      birth_date: new Date(),
      role: 'ADMIN',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: 'Lucas Lorenzo Anderson Pereira',
      email: 'lucas.lorenzo.pereira@vivax.com',
      cpf: '13386748546',
      password: await bcrypt.encrypt('123456789'),
      birth_date: new Date(),
      role: 'USER',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      name: 'Isabelly Aurora Alícia Teixeira',
      email: 'isabelly_teixeira@numero.com.br',
      cpf: '82147454621',
      password: await bcrypt.encrypt('123456789'),
      birth_date: new Date(),
      role: 'USER',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 4,
      name: 'Brenda Nina Caldeira',
      email: 'brenda_caldeira@associate.com.br',
      cpf: '66832918534',
      password: await bcrypt.encrypt('123456789'),
      birth_date: new Date(),
      role: 'USER',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];
};
