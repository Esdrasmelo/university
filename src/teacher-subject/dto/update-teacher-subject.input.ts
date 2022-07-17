import { CreateTeacherSubjectInput } from './create-teacher-subject.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTeacherSubjectInput extends PartialType(
  CreateTeacherSubjectInput,
) {}
