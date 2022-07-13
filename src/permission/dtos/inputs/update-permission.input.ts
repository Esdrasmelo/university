import { Field, InputType, Int } from '@nestjs/graphql';
import { UsersRole } from '@prisma/client';

@InputType()
export class UpdatePermissionInput {
  @Field(() => Int, { nullable: true })
  system_resource_id?: number;

  @Field({ nullable: true })
  user_role?: UsersRole;

  @Field({ nullable: true })
  can_create?: boolean;

  @Field({ nullable: true })
  can_read?: boolean;

  @Field({ nullable: true })
  can_update?: boolean;

  @Field({ nullable: true })
  can_delete?: boolean;
}
