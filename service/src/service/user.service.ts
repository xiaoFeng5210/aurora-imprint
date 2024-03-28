import { Provide } from '@midwayjs/core';
import { IUserOptions } from '../interface';
import {User} from '../entity/user.entity';
import {InjectEntityModel} from "@midwayjs/typeorm";
import {Repository} from "typeorm";
import {UserDTO} from "../dto/user";

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<IUserOptions>;
  
  async create(user: UserDTO) {
    // 我们需要创建一个uid保存到数据库
    
    return await this.userModel.save(user);
  }
}
