import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Public } from 'src/public.decorater';

@Controller('auth')
export class AuthController {

    constructor(
            @Inject('AUTH_SERVICE')
            private client: ClientProxy,
          ) {}
        @Public()
          @Get(':email')
  generate(@Param('email') email: string) {
    return this.client.send('generate_token',
      email,
    );
  }
}
