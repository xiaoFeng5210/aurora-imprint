import {Controller, Get, Inject, Query} from '@midwayjs/core';
import {Context} from '@midwayjs/koa';
import {UserService} from '../service/user.service';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get('/get_user')
  async getUser(@Query('uid') uid) {
    return await this.userService.getUser({uid})
  }
}
