import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginDTO {
  @Field()
  access_token: string;
}
