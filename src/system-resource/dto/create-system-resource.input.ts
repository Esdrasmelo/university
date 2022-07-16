import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSystemResourceInput {
  @Field()
  name: string;
}
