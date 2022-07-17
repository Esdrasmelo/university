import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCourseTeacherInput {
  @Field(() => Int)
  course_id: number;

  @Field(() => Int)
  teacher_id: number;
}
