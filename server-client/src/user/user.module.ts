import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../core/prisma/prisma.module';
import {PrismaService} from "../core/prisma/prisma.service";

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
  imports: [PrismaModule],
})
export class UserModule {}
