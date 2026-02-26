import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy, Payload } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
     constructor(
    @Inject('USER_SERVICE')
    private client: ClientProxy,
  ) {}

  @Get()
  getUsers() {
    return this.client.send('getUsers', {});
  }

  @Post('create')
   createUser(@Payload() data:any) {
     return this.client.send('createUser', data);
   }
}

