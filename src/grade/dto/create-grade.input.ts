import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { StudentSituation } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

@InputType()
export class CreateGradeInput {
  @Field(() => Int)
  subject_id: number;

  @Field(() => Int)
  course_id: number;

  @Field(() => Int)
  student_id: number;

  @Field(() => Int)
  teacher_id: number;

  @Field(() => Int)
  semester: number;

  @Field(() => Float)
  first_grade: number;

  @Field(() => Float)
  second_grade: number;

  @Field(() => Float)
  extra_grade: number;

  @Field(() => Float)
  final_grade: number;

  @Field()
  situation: StudentSituation;
}
