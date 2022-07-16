import { CreateCourseCategoryInput } from './create-course-category.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCourseCategoryInput extends PartialType(
  CreateCourseCategoryInput,
) {}
