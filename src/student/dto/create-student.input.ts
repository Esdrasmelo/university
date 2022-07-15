import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStudentInput {
  @Field(() => Int)
  user_id: number;

  @Field(() => Int)
  course_id: number;

  @Field(() => Int)
  semester: number;
}
