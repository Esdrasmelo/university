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
      role: 'STUDENT',
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
      role: 'STUDENT',
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
      role: 'STUDENT',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 5,
      name: 'Rogério Caldeira',
      email: 'rogeriocaldeira@associate.com.br',
      cpf: '66132918534',
      password: await bcrypt.encrypt('123456789'),
      birth_date: new Date(),
      role: 'STUDENT',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 6,
      name: 'Josias Madureira',
      email: 'madureirajosisas@associate.com.br',
      cpf: '12332918534',
      password: await bcrypt.encrypt('123456789'),
      birth_date: new Date(),
      role: 'STUDENT',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 7,
      name: 'Erick Wendel',
      email: 'erick.wendel@associate.com.br',
      cpf: '66830018534',
      password: await bcrypt.encrypt('123456789'),
      birth_date: new Date(),
      role: 'TEACHER',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 8,
      name: 'Pedro Cavalcante',
      email: 'pedro_cavalcante@associate.com.br',
      cpf: '66832918274',
      password: await bcrypt.encrypt('123456789'),
      birth_date: new Date(),
      role: 'TEACHER',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 9,
      name: 'Julia Messias',
      email: 'messias_ju@associate.com.br',
      cpf: '66835558274',
      password: await bcrypt.encrypt('123456789'),
      birth_date: new Date(),
      role: 'TEACHER',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 10,
      name: 'Maria Justus',
      email: 'maria_justus@associate.com.br',
      cpf: '66832911174',
      password: await bcrypt.encrypt('123456789'),
      birth_date: new Date(),
      role: 'TEACHER',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];
};
