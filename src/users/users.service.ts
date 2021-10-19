import { Injectable, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';


import { Cron } from '@nestjs/schedule';

//cron

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) // private readonly toolsService: ToolsService,
  {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findUser(){
    return await this.userRepository.find({paid:false});
  }

  @Cron('10 * * * * *') //every minute at 10 second
  async handleCron() {
    const users =  await this.findUser();
    
    users.forEach(user => {
      console.log(user);
    });

    console.log('Called when the current second is 10');

  }

}
