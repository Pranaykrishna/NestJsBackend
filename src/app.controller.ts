/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDTO } from './user/user.dto';
import { BaseResponse } from './common/base.response.dto';
import { GetUserDTO } from './user/getuser.dto';
import { ProductDTO } from './product/product.dto';
import { GetProductDTO } from './product/getproduct.dto';
import { OrderDTO } from './order/order.dto';
import { GetOrderDTO } from './order/getorder.dto';
// import { userInfo } from 'os';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('/user')
  createUser(@Body() body: UserDTO): Promise<BaseResponse> {
    console.log(body);
    return this.appService.createUser(body);
  }

  @Get('/user')
  getUser(@Body() body: GetUserDTO): Promise<BaseResponse> {
    console.log(body.userId);
    return this.appService.getUser(body);
  }

  @Post('/product')
  createProduct(@Body() body: ProductDTO): Promise<BaseResponse> {
    console.log(body);
    return this.appService.createProduct(body);
  }

  @Get('/product')
  getProduct(@Body() body: GetProductDTO): Promise<BaseResponse> {
    console.log(body.productId);
    return this.appService.getProduct(body);
  }

  @Post('/order')
  createOrder(@Body() body: OrderDTO): Promise<BaseResponse> {
    console.log(body);
    return this.appService.createOrder(body);
  }

  @Get('/order')
  getOrder(@Body() body: GetOrderDTO): Promise<BaseResponse> {
    console.log(body.orderId);
    return this.appService.getOrder(body);
  }

}


