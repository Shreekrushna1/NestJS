import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('product')
export class ProductController {
    constructor(
        @Inject('PRODUCT_SERVICE')
        private client: ClientProxy,
      ) {}
    
      @Get()
      getUsers() {
        return this.client.send('get_users', {});
      }
}
