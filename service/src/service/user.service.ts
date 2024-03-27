import { Provide } from '@midwayjs/core';
import { IUserOptions } from '../interface';
import {User} from '../entity/user.entity';
import {InjectEntityModel} from "@midwayjs/typeorm";
import {Repository} from "typeorm";

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<IUserOptions>;
  
  async create(user: IUserOptions) {
    return await this.userModel.save(user);
  }
}
