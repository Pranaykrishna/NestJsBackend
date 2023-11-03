/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post('/product')
  createProduct(@Body() body: any) {
    console.log(body);
    return this.productsService.createProduct(body);
  }

  @Get('/product')
  getProduct(@Body() body: any) {
    console.log(body.productId);
    return this.productsService.getProduct(body.productId);
  }

}
