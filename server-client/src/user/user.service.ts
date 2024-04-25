import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../core/prisma/prisma.service';
import {nanoid} from "nanoid";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  
  create(createUserDto: CreateUserDto) {
    const uid = nanoid()
    const data = {
      uid,
      ...createUserDto, 
    }
    return this.prisma.user.create({data})
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(email: string) {
    return this.prisma.user.findUnique({where: {email}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
