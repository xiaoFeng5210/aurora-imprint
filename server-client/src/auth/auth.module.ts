import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UserModule} from "../user/user.module";
import {UserService} from "../user/user.service";

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService],
  imports: [UserModule]
})
export class AuthModule {}
