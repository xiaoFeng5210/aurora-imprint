import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../core/prisma/prisma.module';
import {PrismaService} from "../core/prisma/prisma.service";
import {LoginMiddleware} from "../common/middleware/login.middleware";

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
  imports: [PrismaModule],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoginMiddleware)
      .forRoutes('users/login');
  }
}