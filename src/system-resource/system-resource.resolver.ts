import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SystemResourceService } from './system-resource.service';
import { SystemResourceSchema } from './entities/system-resource.entity';
import { CreateSystemResourceInput } from './dto/create-system-resource.input';
import { UpdateSystemResourceInput } from './dto/update-system-resource.input';
import { SystemResourcesWhereInput } from 'prisma/generated/system-resources';
import { UseGuards, UseInterceptors } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { UserPermissionsGuard } from '../auth/guards/permissions-auth.guard';

@Resolver()
export class SystemResourceResolver {
  constructor(private readonly systemResourceService: SystemResourceService) {}

  @Query(() => [SystemResourceSchema])
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('System Resources', 'can_read'))
  systemResources(
    @Args('where', { nullable: true }) where?: SystemResourcesWhereInput,
  ) {
    return this.systemResourceService.systemResources(where);
  }

  @Mutation(() => SystemResourceSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('System Resources', 'can_create'))
  createSystemResource(
    @Args('createSystemResourceInput')
    createSystemResourceInput: CreateSystemResourceInput,
  ) {
    return this.systemResourceService.createSystemResource(
      createSystemResourceInput,
    );
  }

  @Mutation(() => SystemResourceSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('System Resources', 'can_update'))
  updateSystemResource(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateSystemResourceInput')
    updateSystemResourceInput: UpdateSystemResourceInput,
  ) {
    return this.systemResourceService.updateSystemResource(
      id,
      updateSystemResourceInput,
    );
  }

  @Mutation(() => SystemResourceSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('System Resources', 'can_delete'))
  deleteSystemResource(@Args('id', { type: () => Int }) id: number) {
    return this.systemResourceService.deleteSystemResource(id);
  }
}
