import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class StudentSchema {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  user_id: number;

  @Field(() => Int)
  course_id: number;

  @Field()
  student_id: string;

  @Field(() => Int)
  semester: number;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
