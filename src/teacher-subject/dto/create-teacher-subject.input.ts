import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTeacherSubjectInput {
  @Field(() => Int)
  teacher_id: number;

  @Field(() => Int)
  subject_id: number;
}
