import { CreateStudentInput } from './create-student.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStudentInput extends PartialType(CreateStudentInput) {}
