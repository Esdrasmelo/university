import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCourseSubjectInput {
  @Field(() => Int)
  course_id: number;

  @Field(() => Int)
  subject_id: number;
}
