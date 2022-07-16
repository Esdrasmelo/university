import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SystemResourceSchema {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
