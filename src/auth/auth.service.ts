import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { UserDTO } from '../user/dto/user.dto';
import { BcryptUtils } from '../utils/bcrypt.utils';
import { LoginInput } from './dto/login.input';
import { LoginDTO } from './entities/login.entity';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private bcryptUtils: BcryptUtils,
    private jwtService: JwtService,
  ) {}

  private async validateUser({
    email,
    password,
  }: LoginInput): Promise<UserDTO> {
    try {
      const user = await this.prismaService.users.findUnique({
        where: {
          email,
        },
      });

      const arePasswordsEquals = user
        ? await this.bcryptUtils.compareValues(password, user.password)
        : null;

      if (!arePasswordsEquals)
        throw new UnauthorizedException('Invalid Credentials');

      return user;
    } catch (error) {
      throw error;
    }
  }

  async login(loginData: LoginInput): Promise<LoginDTO> {
    const user = await this.validateUser(loginData);

    const payload = { sub: user.id, roles: user.role };

    return {
      access_token: this.jwtService.sign(payload, {
        secret: process.env.PRIVATE_KEY,
        expiresIn: '10m',
      }),
    };
  }
}
