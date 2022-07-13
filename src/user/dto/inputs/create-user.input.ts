import { IsEmail, Length } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  name: string;

  @IsEmail()
  @Field()
  email: string;

  @Length(8, 255)
  @Field()
  password: string;

  @Field()
  cpf: string;

  @Field({ nullable: true })
  birth_date?: Date;
}
