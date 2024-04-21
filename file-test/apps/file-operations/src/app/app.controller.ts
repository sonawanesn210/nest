/*  import { AppService } from './app.service';
import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('xml')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post(':filename')
  async createXmlFile(@Param('filename') filename: string, @Body() xmlData: string) {
    return this.appService.createXmlFile(filename, xmlData);
  }

  @Get(':filename')
  async getXmlFile(@Param('filename') filename: string, @Res() res: Response) {
    const data = await this.appService.getXmlFile(filename);
   res.setHeader('Content-Type', 'application/xml');
  console.log(typeof data)
    res.send(data);
  }
} */
 

import { AppService } from './app.service';
import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('xml')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post(':filename')//newtesting11
  async createXmlFile(@Param('filename') filename: string, @Body() xmlData: any) {
    return this.appService.createXmlFile(filename, xmlData);
  }
 /*  @Post(':filename/1')//newtesting11
  async createXmlFile1(@Param('filename') filename: string, @Body() xmlData: any) {
    return this.appService.createXmlFile1(filename, xmlData);
  }
 */
    @Get(':filename')
  async getXmlFile(@Param('filename') filename: string, @Res() res: Response) {
    const data = await this.appService.getXmlFile(filename);
    res.setHeader('Content-Type', 'application/xml');
    res.send(data);
  }  
}









/* 
import { Controller, Post, Body } from '@nestjs/common';
import * as fs from 'fs';

@Controller('xml')
export class AppController {
  private readonly XML_FOLDER_PATH = './xml-data';

  @Post()
  saveXml(@Body() xmlData: string, @Body() fileName: string) {
    
    const filePath = `${this.XML_FOLDER_PATH}/${fileName}.xml`;

    fs.writeFile(filePath, JSON.stringify(xmlData), (err) => {
      if (err) {
        console.error(`Error writing XML file: ${err}`);
        throw err;
      }

      console.log(`XML file saved at ${filePath}`);
    });

    return { message: 'XML data saved successfully' };
  }
}
 */