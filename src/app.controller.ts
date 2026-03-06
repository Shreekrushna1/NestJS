import { Body, Controller, Get, HttpCode, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('task')
export class AppController {
  constructor(private readonly appService: AppService) {}
}
