import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ScheduleModule } from '@nestjs/schedule';
import { MailModule } from 'src/mail/mail.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    ScheduleModule.forRoot(),
    MailModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
