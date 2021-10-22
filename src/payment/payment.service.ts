import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

//stripe
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';
import { InjectStripe } from 'nestjs-stripe';

@Injectable()
export class PaymentService {

  constructor(
    @InjectStripe() private readonly stripeClient: Stripe,
  ){}

  create(createPaymentDto: CreatePaymentDto) {
    return 'This action adds a new payment';
  }

  findAll() {
    return `This action returns all payment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }


  async checkout(productId:string, quantity:number,idUser:number){

    console.log("servicio checkout-->",productId, quantity);

    const session = await this.stripeClient.checkout.sessions.create({
      success_url: `${process.env.FRONTEND_URL}/result?idUser=${idUser}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/plan?idUser=${idUser}`,
      payment_method_types: ['card'],
      line_items: [
        {
          price: productId, 
          quantity: quantity
        },
      ],
      mode: 'payment',
    });

    return session;

  }

}
