import { AppService1 } from './app1.sevice';
import { Controller, Get, Post,Put, Body, Param, Res,Patch } from '@nestjs/common';
import { Response } from 'express';

@Controller('xml-js')
export class AppController1 {
  constructor(private readonly appService: AppService1) {}

  @Post(':filename')//newtesting11
  async createXmlFile(@Param('filename') filename: string, @Body() inputData: any) {
    return this.appService.createXmlFile_xmljs(filename, inputData);
  }
 
  
    @Get(':filename')
  async getXmlFile(@Param('filename') filename: string, @Res() res: Response) {
    const data = await this.appService.getXmlFile_xmljs(filename);
    res.setHeader('Content-Type', 'application/xml');
    res.send(data);
  }  

  @Put(':filename')
async updateXmlFile(@Param('filename') filename: string, @Body() inputData: any) {
  return this.appService.updateXmlFile_xmljs(filename, inputData);
} 

/* @Put('edit-word')
async editWord(@Body() data: { filePath: string, oldWord: string, newWord: string }, @Res() res) {
  try {
  await this.appService.editWord(data.filePath, data.oldWord, data.newWord);
  return res.send({ message: 'Word edited successfully' });
} catch (err) {
  return res.send({ message: 'Word edit failed', error: err.message });
} 
}*/

}

