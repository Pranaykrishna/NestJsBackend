/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { BaseResponse } from 'src/common/base.response.dto';
import { Db, MongoClient, ObjectId } from 'mongodb';
import { GetProductDTO } from './dto/get-product.dto';

@Injectable()
export class ProductsService {
  database: Db;
  constructor() {
    const uri =
      'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1';
    const client = new MongoClient(uri);
    this.database = client.db('ordering_system');
  }
  async createProduct(body: CreateProductDto): Promise<BaseResponse> {
    const products = this.database.collection('products');
    if (
      body.product == '' ||
      body.color == '' ||
      body.price == '' ||
      body.Material == ''
    ) {
      return { isSuccess: false, data: {}, message: 'Invalid data' };
    }
    const productinfo = await products.insertOne(body);
    const product_info = productinfo.insertedId.toString();
    return { isSuccess: true, data: { product_info } };
  }

  async getProduct(body: GetProductDTO): Promise<BaseResponse> {
    if (body.productId == '') {
      return { isSuccess: false, data: {}, message: 'Invalid ID' };
    }
    const products = this.database.collection('products');
    const query = {
      _id: new ObjectId(body.productId)
    }
    const product = await products.findOne(query);
    if (query == null || product == null) {
      return { isSuccess: false, data: {}, message: "Invalid Id" };
    }
    return { isSuccess: true, data: { product } };
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
