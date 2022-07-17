import { CreateCourseTeacherInput } from './create-course-teacher.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCourseTeacherInput extends PartialType(
  CreateCourseTeacherInput,
) {}
