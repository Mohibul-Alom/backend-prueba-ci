import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //le decimos que use el class validador ubicado en el dto de la entidad
  app.useGlobalPipes(
    new ValidationPipe({
      //en caso de que llegue una peticion de create no cumpla la validacion se rechaza la peticion
      //en caso de haya un campo extra no comtemplado en el dto, se rechaza la peticion
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
 
  await app.listen(5000);
}
bootstrap();
