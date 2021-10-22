import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { ConfigService } from '@nestjs/config';

@Controller('payment')
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService,
    private configService: ConfigService,
  ) {}

  @Post()
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @Get()
  findAll() {
    return this.paymentService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentService.findOne(+id);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentService.update(+id, updatePaymentDto);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentService.remove(+id);
  }

  //create session and return session Id
  @Post('/checkout')
  async checkout(@Body() body: { idPlan: number; quantity: number; idUser:number }) {
    const { idPlan, quantity,idUser } = body;

    let productId:string = "";


    if(idPlan === 1) productId = process.env.PRICE_PLAN_LOW;
    if(idPlan === 2) productId = process.env.PRICE_PLAN_MEDIUM;
    if(idPlan === 3) productId = process.env.PRICE_PLAN_HIGH;

    return await this.paymentService.checkout(
      productId,
      quantity,
      idUser,
    );
  }




}
