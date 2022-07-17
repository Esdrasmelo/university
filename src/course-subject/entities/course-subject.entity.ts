import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CourseSubjectSchema {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  course_id: number;

  @Field(() => Int)
  subject_id: number;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
