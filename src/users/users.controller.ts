import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
     constructor(
    @Inject('USER_SERVICE')
    private client: ClientProxy,
  ) {}

  @Get()
  getUsers() {
    return this.client.send('get_users', {});
  }
}
