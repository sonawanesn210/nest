


import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly fileService: AppService) {}

  @Post()
  async writeFile(@Body() data: any) {
    await this.fileService.writeFile('data.json', data);
    console.log("file has been saved",data)
  }

  @Get()
  async readFile() {
    const data = await this.fileService.readFile('data.json');
    return data;
  }
}
