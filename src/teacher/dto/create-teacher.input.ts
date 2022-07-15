import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTeacherInput {
  @Field()
  teacher_id: string;

  @Field(() => Int)
  user_id: number;
}
