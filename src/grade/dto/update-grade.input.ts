import { CreateGradeInput } from './create-grade.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGradeInput extends PartialType(CreateGradeInput) {}
