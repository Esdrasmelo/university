import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import 'reflect-metadata';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { APP_PORT } = process.env;

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(APP_PORT);
}

bootstrap();
