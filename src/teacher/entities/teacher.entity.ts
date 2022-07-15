import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TeacherSchema {
  @Field(() => Int)
  id: number;

  @Field()
  teacher_id: string;

  @Field(() => Int)
  user_id: number;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
