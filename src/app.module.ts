import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserResolver } from './user/user.resolver';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { UserRepository } from './user/user.repository';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AuthService } from './auth/auth.service';
import { AuthResolver } from './auth/auth.resolver';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { BcryptUtils } from './utils/bcrypt.utils';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';
import { GqlAuthGuard } from './auth/guards/gql-auth.guard';
import { PermissionModule } from './permission/permission.module';
import { PermissionService } from './permission/permission.service';
import { PermissionRepository } from './permission/permission.repository';
import { PermissionResolver } from './permission/permission.resolver';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { TeacherService } from './teacher/teacher.service';
import { TeacherRepository } from './teacher/teacher.repository';
import { TeacherResolver } from './teacher/teacher.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ headers: req.headers }),
      driver: ApolloDriver,
      include: [
        UserModule,
        AuthModule,
        PermissionModule,
        StudentModule,
        TeacherModule,
      ],
      path: '/',
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
      introspection: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PermissionModule,
    UserModule,
    AuthModule,
    StudentModule,
    TeacherModule,
  ],
  controllers: [],
  providers: [
    PrismaService,
    UserResolver,
    UserService,
    UserRepository,
    AuthService,
    AuthResolver,
    BcryptUtils,
    JwtService,
    JwtStrategy,
    GqlAuthGuard,
    PermissionService,
    PermissionRepository,
    PermissionResolver,
    TeacherService,
    TeacherRepository,
    TeacherResolver,
  ],
})
export class AppModule {}
