import { CreateSystemResourceInput } from './create-system-resource.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSystemResourceInput extends PartialType(
  CreateSystemResourceInput,
) {}
