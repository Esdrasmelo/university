import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTeacherInput {
  @Field(() => Int)
  user_id: number;
}
