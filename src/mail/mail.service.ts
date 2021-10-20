import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendOffer (user:User){
    
    const url = `prueba.es`;

    await this.mailerService.sendMail({
        to:user.email,
        subject:'Disount of 15%',
        template:'./discount', 
        context:{
            name:user.name,
            url,
        }
    });
  }

}

