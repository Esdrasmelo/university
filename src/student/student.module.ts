import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { StudentRepository } from './student.repository';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    StudentResolver,
    StudentService,
    StudentRepository,
    PrismaService,
    JwtService,
  ],
})
export class StudentModule {}
