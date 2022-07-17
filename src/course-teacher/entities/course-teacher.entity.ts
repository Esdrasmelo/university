import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CourseTeacherSchema {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  course_id: number;

  @Field(() => Int)
  teacher_id: number;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
