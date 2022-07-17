import { PrismaService } from '../../src/prisma/prisma.service';
import { usersSeeds } from './users.seeds';
import { permissionsSeeds } from './permissions.seeds';
import { systemResourcesSeeds } from './resources.seeds';
import { coursesCategoriesSeeds } from './coursesCategories.seeds';
import { coursesSeeds } from './course.seeds';
import { studentsSeeds } from './students.seeds';
import { teachersSeeds } from './teachers.seeds';
import { subjectsSeeds } from './subjects.seeds';
import { coursesSubjectsSeeds } from './coursesSubjects.seeds';

export class mainSeeder {
  constructor(private prisma: PrismaService) {}

  async main() {
    const users = await usersSeeds();

    await this.prisma.users.createMany({
      data: users,
    });
    await this.prisma.systemResources.createMany({
      data: systemResourcesSeeds,
    });
    await this.prisma.permissions.createMany({
      data: permissionsSeeds,
    });
    await this.prisma.coursesCategories.createMany({
      data: coursesCategoriesSeeds,
    });
    await this.prisma.courses.createMany({
      data: coursesSeeds,
    });
    await this.prisma.students.createMany({
      data: studentsSeeds,
    });
    await this.prisma.teachers.createMany({
      data: teachersSeeds,
    });
    await this.prisma.subjects.createMany({
      data: subjectsSeeds,
    });
    await this.prisma.coursesSubjects.createMany({
      data: coursesSubjectsSeeds,
    });
  }
}

const prismaService = new PrismaService();

new mainSeeder(prismaService).main();
