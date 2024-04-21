import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppService1 } from './app1.sevice';
import { AppController1 } from './app1.controller';
@Module({
  controllers: [AppController,AppController1],
  providers: [AppService,AppService1],
})
export class AppModule {}
