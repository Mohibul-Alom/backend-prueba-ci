import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'I am now using nestJs!';
  }

  postCheckout():string {
    return 'I am now in postCheckout';
  }

}
