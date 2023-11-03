/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
// import { Db, MongoClient, ObjectId } from 'mongodb';
// import { BaseResponse } from './common/base.response.dto';
// import { ProductDTO } from './product/product.dto';
// import { GetProductDTO } from './product/getproduct.dto';


@Injectable()
export class AppService {
  // database: Db;
  // constructor() {
  //   const uri =
  //     'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1';
  //   const client = new MongoClient(uri);
  //   this.database = client.db('ordering_system');
  // }

  // // Checking the request and creating a new branch
  // async createUser(): Promise<BaseResponse> {
  //   const users = this.database.collection('users');
  //   if (body.name == "" || body.age < 0 || body.age > 100 || body.occupation == "") {
  //     return { isSuccess: false, data: {}, message: "Validation Failed" } as BaseResponse;
  //   }
  //   const newUser = await users.insertOne(body);
  //   const newUserId = newUser.insertedId.toString();
  //   return { isSuccess: true, data: { userId: newUserId } } as SuccessBaseResponse;
  // }

  // async getUser(body: GetUserDTO): Promise<BaseResponse> {
  //   console.log(body);
  //   console.log("body.userId is", body.userId)
  //   if (body.userId == "") {
  //     return { isSuccess: false, data: {}, message: "Invalid Id" };
  //   }
  //   const users = this.database.collection('users');
  //   const query = {
  //     _id: new ObjectId(body.userId)
  //   }
  //   const user = await users.findOne(query);
  //   //console.log("users are: ",users)
  //   if (query == null || user == null) {
  //     return { isSuccess: false, data: {}, message: "Invalid User info" };
  //   }
  //   console.log(user)
  //   return { isSuccess: true, data: { user } };
  // }

  // async createProduct(body: ProductDTO): Promise<BaseResponse> {
  //   const products = this.database.collection('products');
  //   if (body.product == "" || body.color == "" || body.price == "" || body.Material == "") {
  //     return { isSuccess: false, data: {}, message: "Invalid data" };
  //   }
  //   const productinfo = await products.insertOne(body);
  //   const product_info = productinfo.insertedId.toString()
  //   return { isSuccess: true, data: { product_info } };
  // }

  // async getProduct(body: GetProductDTO): Promise<BaseResponse> {
  //   if (body.productId == "") {
  //     return { isSuccess: false, data: {}, message: "Invalid ID" };
  //   }
  //   const products = this.database.collection('products');
  //   const query = {
  //     _id: new ObjectId(body.productId)
  //   }
  //   const product = await products.findOne(query);
  //   if (query == null || product == null) {
  //     return { isSuccess: false, data: {}, message: "Invalid Id" };
  //   }
  //   return { isSuccess: true, data: { product } };
  // }

  // async createOrder(body: OrderDTO): Promise<BaseResponse> {
  //   const orders = this.database.collection('orders');
  //   if (body.userId == "") {
  //     return { isSuccess: false, data: {}, message: "Invalid user Id" };
  //   }
  //   const products = this.database.collection('products');
  //   //validation
  //   for (body.product in body.products) {
  //     if (body.products[body.product] == "") {
  //       return { isSuccess: false, data: {}, message: "Invalid Id" };
  //     }
  //     const query = {
  //       _id: new ObjectId(body.products[body.product])
  //     }
  //     const product = await products.findOne(query);
  //     if (query == null || product == null) return { isSuccess: false, data: {}, message: "Invalid Product data" };
  //   }

  //   const order = await orders.insertOne(body);
  //   const newOrderId = order.insertedId.toString();
  //   return { isSuccess: true, data: { orderId: newOrderId } };
  // }

  // async getOrder(body: GetOrderDTO): Promise<BaseResponse> {
  //   const orders = this.database.collection('orders');
  //   const query = {
  //     _id: new ObjectId(body.orderId)
  //   }
  //   const order = await orders.findOne(query);
  //   console.log(order);
  //   return { isSuccess: true, data: { order } };;

  // }

}
