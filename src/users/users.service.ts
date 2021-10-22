import { Injectable } from '@nestjs/common';
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
    private mailService: MailService, // private readonly toolsService: ToolsService,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({id: id});
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOne({email: email});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {

    const user = await this.userRepository.preload({
      id, 
      ...updateUserDto
    });
    if(!user){
      throw new Error("User with id"+id+" does not exist");
    }
    return this.userRepository.save(user);

  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findUser() {
    return await this.userRepository.find({ paid: false, mailRequired: true });
  }

  @Cron('*/10 * * * * *') //every minute at 10 second
  async handleCron() {
    const users = await this.findUser();

    if (users.length > 0) {
      users.forEach(async (user) => {
        const minutes = this.calcMinDiff(user.timeStamp);

        if (minutes >= 10) {
          console.log('sending email to the user: ',user.email);
          const updateUser: UpdateUserDto = { ...user };
          updateUser.mailRequired = false;

          await this.update(user.id, updateUser);
          //TODO: enable email sent
          //await this.mailService.sendOffer(user);
          console.log('Email has already sent!');
        }
      });
    }
  }

  private calcMinDiff(timeStamp: Date): Number {
    const userDate: Date = new Date(timeStamp);

    const currentDate: Date = new Date();

    const oneMin = 60 * 1000;

    const diff = Math.round(
      Math.abs(<any>currentDate - <any>userDate) / oneMin,
    );

    return diff;
  }
}
