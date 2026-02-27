import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy, Payload } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
     constructor(
    @Inject('USER_SERVICE')
    private client: ClientProxy,
  ) {}

  @Get('findAll')
  getUsers() {
    return this.client.send('findAll', {});
  }

  @Post('create')
   createUser(@Payload() data:any) {
     return this.client.send('create', data);
   }
}

