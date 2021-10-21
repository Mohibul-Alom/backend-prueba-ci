import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StripeModule } from 'nestjs-stripe';


@Module({
  imports: [
    ConfigModule,
    StripeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        apiKey: configService.get('STRIPE_SECRET_KEY'),
        apiVersion: '2020-08-27',
      }),
    }),
  ],
  controllers: [PaymentController],
  providers: [PaymentService]
})
export class PaymentModule {}
