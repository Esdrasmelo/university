import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CourseSchema {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  category_id: number;

  @Field(() => Int)
  duration: number;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
