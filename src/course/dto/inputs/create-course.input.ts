import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCourseInput {
  @Field()
  name: string;

  @Field(() => Int)
  category_id: number;

  @Field(() => Int)
  duration: number;
}
