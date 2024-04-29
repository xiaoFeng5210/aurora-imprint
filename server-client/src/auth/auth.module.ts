import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UserModule} from "../user/user.module";
import {UserService} from "../user/user.service";
import {PrismaService} from "../core/prisma/prisma.service";
import {JwtModule} from "@nestjs/jwt";
import {JwtService} from "@nestjs/jwt";

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, PrismaService, JwtService],
  imports: [UserModule, JwtModule],
})
export class AuthModule {}