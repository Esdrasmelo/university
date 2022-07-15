import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserSchema {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  birth_date?: Date;

  @Field()
  cpf: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
