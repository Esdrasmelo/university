import { Users } from '@prisma/client';

export interface UserDTO extends Omit<Users, 'password'> {}
