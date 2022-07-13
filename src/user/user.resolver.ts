import { Users } from '@prisma/client';
import { UsersWhereInput } from '../../prisma/generated/users';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UpdateUserInput, UserInput } from './dto/inputs';
import { UserSchema } from './user.schema';
import { UserService } from './user.service';
import { UseGuards, UseInterceptors } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { UserPermissions } from 'src/auth/guards/permissions-auth.guard';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserSchema])
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissions(['ADMIN', 'USER', 'STUDENT', 'TEACHER']))
  async users(
    @Args('where', { nullable: true }) where: UsersWhereInput,
  ): Promise<Users[]> {
    return this.userService.getUsers(where);
  }

  @Mutation(() => UserSchema)
  createUser(@Args('fields') fields: UserInput): Promise<Users> {
    return this.userService.createUser(fields);
  }

  @Mutation(() => UserSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissions(['ADMIN', 'USER', 'STUDENT', 'TEACHER']))
  async updateUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('fields') fields: UpdateUserInput,
  ): Promise<Users> {
    return this.userService.updateUser(id, fields);
  }

  @Mutation(() => UserSchema)
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new UserPermissions(['ADMIN', 'USER', 'STUDENT', 'TEACHER']))
  async deleteUser(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Users> {
    return this.userService.deleteUser(id);
  }
}
