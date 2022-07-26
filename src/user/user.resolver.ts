import { Users } from '@prisma/client';
import { UsersWhereInput } from '../../prisma/generated/users';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/inputs/create-user.input';
import { UpdateUserInput } from './dto/inputs/update-user.input';
import { UserSchema } from './entities/user.entity';
import { UserService } from './user.service';
import { UseGuards, UseInterceptors } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { UserPermissionsGuard } from '../auth/guards/permissions-auth.guard';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserSchema])
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Users', 'can_read'))
  async users(
    @Args('where', { nullable: true })
    where: UsersWhereInput,
  ): Promise<Users[]> {
    return this.userService.getUsers(where);
  }

  @Mutation(() => UserSchema)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<Users> {
    return this.userService.createUser(createUserInput);
  }

  @Mutation(() => UserSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Users', 'can_update'))
  async updateUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<Users> {
    return this.userService.updateUser(id, updateUserInput);
  }

  @Mutation(() => UserSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissionsGuard('Users', 'can_delete'))
  async deleteUser(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Users> {
    return this.userService.deleteUser(id);
  }
}
