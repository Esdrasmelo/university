import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { StudentSituation } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

@ObjectType()
export class GradeSchema {
  @Field(() => Int)
  id: number;

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

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
