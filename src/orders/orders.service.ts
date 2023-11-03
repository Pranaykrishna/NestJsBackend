/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Db, MongoClient, ObjectId } from 'mongodb';
import { BaseResponse } from 'src/common/base.response.dto';
import { GetOrderDTO } from './dto/get-order.dto';

@Injectable()
export class OrdersService {
  database: Db;
  constructor() {
    const uri =
      'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1';
    const client = new MongoClient(uri);
    this.database = client.db('ordering_system');
  }

  async createOrder(body: CreateOrderDto): Promise<BaseResponse> {
    const orders = this.database.collection('orders');
    if (body.userId == '') {
      return { isSuccess: false, data: {}, message: 'Invalid user Id' };
    }
    const products = this.database.collection('products');
    //validation
    for (body.product in body.products) {
      if (body.products[body.product] == '') {
        return { isSuccess: false, data: {}, message: 'Invalid Id' };
      }
      const query = {
        _id: new ObjectId(body.products[body.product]),
      };
      const product = await products.findOne(query);
      if (query == null || product == null)
        return { isSuccess: false, data: {}, message: 'Invalid Product data' };
    }

    const order = await orders.insertOne(body);
    const newOrderId = order.insertedId.toString();
    return { isSuccess: true, data: { orderId: newOrderId } };
  }

  async getOrder(body: GetOrderDTO): Promise<BaseResponse> {
    const orders = this.database.collection('orders');
    const query = {
      _id: new ObjectId(body.orderId),
    };
    const order = await orders.findOne(query);
    console.log(order);
    return { isSuccess: true, data: { order } };
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
