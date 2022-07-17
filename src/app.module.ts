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
import { CourseCategoryModule } from './course-category/course-category.module';
import { CourseCategoryService } from './course-category/course-category.service';
import { CourseCategoryRepository } from './course-category/course-category.repository';
import { CourseCategoryResolver } from './course-category/course-category.resolver';
import { CourseModule } from './course/course.module';
import { CourseService } from './course/course.service';
import { CourseRepository } from './course/course.repository';
import { CourseResolver } from './course/course.resolver';
import { SystemResourceModule } from './system-resource/system-resource.module';
import { SystemResourceService } from './system-resource/system-resource.service';
import { SystemResourceRepository } from './system-resource/system-resource.repository';
import { SystemResourceResolver } from './system-resource/system-resource.resolver';
import { SubjectModule } from './subject/subject.module';
import { SubjectService } from './subject/subject.service';
import { SubjectRepository } from './subject/subject.repository';
import { SubjectResolver } from './subject/subject.resolver';
import { CourseSubjectModule } from './course-subject/course-subject.module';
import { CourseSubjectService } from './course-subject/course-subject.service';
import { CourseSubjectRepository } from './course-subject/course-subject.repository';
import { CourseSubjectResolver } from './course-subject/course-subject.resolver';
import { CourseTeacherModule } from './course-teacher/course-teacher.module';
import { CourseTeacherService } from './course-teacher/course-teacher.service';
import { CourseTeacherRepository } from './course-teacher/course-teacher.repository';
import { CourseTeacherResolver } from './course-teacher/course-teacher.resolver';
import { TeacherSubjectModule } from './teacher-subject/teacher-subject.module';
import { TeacherSubjectService } from './teacher-subject/teacher-subject.service';
import { TeacherSubjectRepository } from './teacher-subject/teacher-subejct.repository';
import { TeacherSubjectResolver } from './teacher-subject/teacher-subject.resolver';
import { GradeModule } from './grade/grade.module';
import { GradeService } from './grade/grade.service';
import { GradeRepository } from './grade/grade.repository';
import { GradeResolver } from './grade/grade.resolver';

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
        CourseCategoryModule,
        CourseModule,
        SystemResourceModule,
        SubjectModule,
        CourseSubjectModule,
        CourseTeacherModule,
        TeacherSubjectModule,
        GradeModule,
      ],
      path: '/',
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      introspection: true,
      playground: false,
      installSubscriptionHandlers: true,
      debug: false,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PermissionModule,
    UserModule,
    AuthModule,
    StudentModule,
    TeacherModule,
    CourseCategoryModule,
    CourseModule,
    SystemResourceModule,
    SubjectModule,
    CourseSubjectModule,
    CourseTeacherModule,
    TeacherSubjectModule,
    GradeModule,
  ],
  controllers: [],
  providers: [
    PrismaService,
    BcryptUtils,
    JwtService,
    JwtStrategy,
    GqlAuthGuard,
    AuthService,
    AuthResolver,
    UserService,
    UserRepository,
    UserResolver,
    PermissionService,
    PermissionRepository,
    PermissionResolver,
    TeacherService,
    TeacherRepository,
    TeacherResolver,
    CourseCategoryService,
    CourseCategoryRepository,
    CourseCategoryResolver,
    CourseService,
    CourseRepository,
    CourseResolver,
    SystemResourceService,
    SystemResourceRepository,
    SystemResourceResolver,
    SubjectService,
    SubjectRepository,
    SubjectResolver,
    CourseSubjectService,
    CourseSubjectRepository,
    CourseSubjectResolver,
    CourseTeacherService,
    CourseTeacherRepository,
    CourseTeacherResolver,
    TeacherSubjectService,
    TeacherSubjectRepository,
    TeacherSubjectResolver,
    GradeService,
    GradeRepository,
    GradeResolver,
  ],
})
export class AppModule {}
