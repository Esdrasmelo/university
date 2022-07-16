import { UseGuards, UseInterceptors } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Permissions } from '@prisma/client';
import { PermissionsWhereInput } from 'prisma/generated/permissions';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { UserPermissionsGuard } from 'src/auth/guards/permissions-auth.guard';
import { CreatePermissionInput } from './dtos/inputs/create-permission.input';
import { UpdatePermissionInput } from './dtos/inputs/update-permission.input';
import { PermissionSchema } from './permission.schema';
import { PermissionService } from './permission.service';

@Resolver('Permissions')
export class PermissionResolver {
  constructor(private readonly permissionService: PermissionService) {}

  @Query(() => [PermissionSchema])
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Permissions', 'can_read'))
  async permissions(
    @Args('where', { nullable: true }) where?: PermissionsWhereInput,
  ): Promise<Permissions[]> {
    return this.permissionService.getPermissions(where);
  }

  @Mutation(() => PermissionSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Permissions', 'can_create'))
  async createPermission(
    @Args('fields') fields: CreatePermissionInput,
  ): Promise<Permissions> {
    return this.permissionService.createPermission(fields);
  }

  @Mutation(() => PermissionSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Permissions', 'can_update'))
  async updatePermission(
    @Args('id', { type: () => Int }) id: number,
    @Args('fields') fields: UpdatePermissionInput,
  ): Promise<Permissions> {
    return this.permissionService.updatePermission(id, fields);
  }

  @Mutation(() => PermissionSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Permissions', 'can_delete'))
  async deletePermission(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Permissions> {
    return this.permissionService.deletePermission(id);
  }
}
