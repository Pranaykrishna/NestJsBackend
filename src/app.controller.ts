/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
// import { userInfo } from 'os';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/user')
  getUser(@Body() body: any) {
    console.log(body.userId);
    return this.appService.getUser(body.userId);
  }

  @Post('/user')
  createUser(@Body() body: any): Promise<string> {
    console.log(body);
    return this.appService.createUser(body);
  }

  @Post('/product')
  createProduct(@Body() body: any): Promise<string> {
    console.log(body);
    return this.appService.createProduct(body);
  }

  @Get('/product')
  getProduct(@Body() body: any) {
    console.log(body.productId);
    return this.appService.getProduct(body.productId);
  }

  @Post('/order')
  createOrder(@Body() body: any): Promise<string> {
    console.log(body);
    return this.appService.createOrder(body);
  }

  @Get('/order')
  getOrder(@Body() body:any){
    console.log(body.orderId);
    return this.appService.getOrder(body.orderId);
  }

}


