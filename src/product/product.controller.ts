import { Controller, Get, Post, Body, Param, Put, Delete, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('product')
export class ProductController {

  constructor(
    @Inject('PRODUCT_SERVICE')
    private client: ClientProxy,
  ) {}

  @Get()
  getAll() {
    return this.client.send('findAll_products', {});
  }

  @Post('create_product')
  create(@Body() body: any) {
    return this.client.send('create_product', body);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.client.send('findOne_product', id);
  }

  @Post('update/:id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.client.send('update_product', {
      id,
      ...body,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.client.send('remove_product', id);
  }
}