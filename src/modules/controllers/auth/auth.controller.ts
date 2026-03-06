import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Public } from 'src/decorators/public.decorater';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AUTH_SERVICE')
    private client: ClientProxy,
  ) {}
  @Public()
  @Post('login')
  generate(@Body() body: any) {
    return this.client.send('generate_token', body);
  }
}
