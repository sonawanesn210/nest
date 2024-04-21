
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {
  async writeFile(filename: string, data: any): Promise<void> {
    return new Promise((resolve, reject) => {
      fs.writeFile(filename, JSON.stringify(data), err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  }

  async readFile(filename: string): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) {
          return reject(err);
        }
        resolve(data);
      });
    });
  }
}
