import { IsEmail, Length } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { ValidCpf } from '../../../utils/cpf-validator.utils';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @IsEmail()
  @Field()
  email: string;

  @Length(8, 255)
  @Field()
  password: string;

  @ValidCpf({ message: 'Please, type a valid CPF.' })
  @Field()
  cpf: string;

  @Field({ nullable: true })
  birth_date?: Date;
}
