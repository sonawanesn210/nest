import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('My Swagger App')
  .setDescription('API description')
  .setVersion('1.0')
  .addTag('my-api')
  .build();
