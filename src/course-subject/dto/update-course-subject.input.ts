import { CreateCourseSubjectInput } from './create-course-subject.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCourseSubjectInput extends PartialType(
  CreateCourseSubjectInput,
) {}
