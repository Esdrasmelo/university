import { Field, InputType, Int } from '@nestjs/graphql';
import { UsersRole } from '@prisma/client';

@InputType()
export class PermissionInput {
  @Field(() => Int)
  system_resource_id: number;

  @Field()
  user_role: UsersRole;

  @Field()
  can_create: boolean;

  @Field()
  can_read: boolean;

  @Field()
  can_update: boolean;

  @Field()
  can_delete: boolean;
}
