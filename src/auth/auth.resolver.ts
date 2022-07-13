import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/inputs/login.input';
import { LoginDTO } from './dto/login.dto';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginDTO)
  login(@Args('loginInput') loginInput: LoginInput): Promise<LoginDTO> {
    return this.authService.login(loginInput);
  }
}
