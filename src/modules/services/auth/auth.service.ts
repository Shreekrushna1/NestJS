import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RpcException } from '@nestjs/microservices';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {

  private users:any[] = [];
  private id = 1;

  constructor(private jwtService: JwtService) {}

  register(data) {

    const exists = this.users.find(
      (u:any) => u.email === data.email,
    );

    if (exists) {
      throw new RpcException('Email already exists');
    }

    const user = { id: this.id++, ...data };
    this.users.push(user);

    const token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
    });

    return { access_token: token };
  }
  
async login(data){
    const user = this.users.find(
        (u:any)=>{
            u.email === data.email.toLowerCase();
        }
    )
    if(!user){
        throw new RpcException({
            statusCode:401,
            message:'Invalid Credentials'
        })
    }
    const match = await bcrypt.compare(
        data.password,user.password
    )
}
  
}
