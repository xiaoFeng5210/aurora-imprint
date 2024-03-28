import {Controller, Inject, Post, Body} from '@midwayjs/core';
import {Context} from "@midwayjs/koa";
import {UserService} from "../service/user.service";
import {IUserOptions} from "../interface";

@Controller('/user')
export class PhotoService {
	@Inject()
	ctx: Context;

	@Inject()
	userService: UserService;
	
  @Post('/create')
	async create(@Body() user: IUserOptions) {
		
  }
	
}