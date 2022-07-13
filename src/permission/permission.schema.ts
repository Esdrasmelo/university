import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UsersRole } from '@prisma/client';

@ObjectType()
export class PermissionSchema {
  @Field(() => Int)
  id: number;

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
