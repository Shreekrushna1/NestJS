import { Injectable } from '@nestjs/common';
import { TestValidator } from './Validators/test.validator';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getName(name:string):string{
    return `Hello ${name}`;
  }
}
