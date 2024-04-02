import { NestFactory } from '@nestjs/core';
import {VERSION_NEUTRAL, VersioningType, ValidationPipe} from '@nestjs/common';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import {AllExceptionsFilter} from "./common/exceptions/base.exception.filter";
import {HttpExceptionFilter} from "./common/exceptions/http.exception.filter";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  // 接口版本化管理
  app.enableVersioning({
    // 全局控制版本
    defaultVersion: [VERSION_NEUTRAL, '1', '2'],
    type: VersioningType.URI,
  });
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(7001);
}
bootstrap();
