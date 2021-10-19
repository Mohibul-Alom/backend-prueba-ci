import { Injectable, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';


//cron
import { Cron } from '@nestjs/schedule';

//mailer
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private mailService: MailService,
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
    
    users.forEach(async(user) => {
      console.log(user);
      const minutes = this.calcMinDiff(user.timeStamp);

      if(minutes >= 10){
        //await this.mailService.sendOffer(user);
      }
    });

  }

  private calcMinDiff(timeStamp:Date):Number {

    const userDate: number = new Date(timeStamp).getTime();

    const currentDate: number = new Date().getTime();
    
    const diff = ((((currentDate - userDate) % 86400000) % 3600000) / 60000);

    console.log(diff);
    
    return diff;
  }

}