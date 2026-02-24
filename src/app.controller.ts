import { Body, Controller, Get, HttpCode, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { TestValidator } from './Validators/test.validator';

@Controller('task')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('test')
  postName(@Body() data:TestValidator){
    return this.appService.getName(data.name)
  }
}
