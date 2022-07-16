import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCourseCategoryInput {
  @Field()
  name: string;
}
