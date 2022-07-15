import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { LoginDTO } from './entities/login.entity';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginDTO)
  login(@Args('loginInput') loginInput: LoginInput): Promise<LoginDTO> {
    return this.authService.login(loginInput);
  }
}
