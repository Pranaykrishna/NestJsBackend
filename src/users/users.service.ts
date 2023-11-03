/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseResponse, SuccessBaseResponse } from 'src/common/base.response.dto';
import { Db, MongoClient, ObjectId } from 'mongodb';
import { GetUserDTO } from './dto/get-user.dto';


@Injectable()
export class UsersService {

  database: Db;
  constructor() {
    const uri =
      'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1';
    const client = new MongoClient(uri);
    this.database = client.db('ordering_system');
  }

  async createUser(body: CreateUserDto) {
    const users = this.database.collection('users');
    if (body.name == "" || body.age < 0 || body.age > 100 || body.occupation == "") {
      return { isSuccess: false, data: {}, message: "Validation Failed" } as BaseResponse;
    }
    const newUser = await users.insertOne(body);
    const newUserId = newUser.insertedId.toString();
    return { isSuccess: true, data: { userId: newUserId } } as SuccessBaseResponse;
  }

  async getUser(body: GetUserDTO): Promise<BaseResponse> {
    console.log(body);
    console.log("body.userId is", body.userId)
    if (body.userId == "") {
      return { isSuccess: false, data: {}, message: "Invalid Id" };
    }
    const users = this.database.collection('users');
    const query = {
      _id: new ObjectId(body.userId)
    }
    const user = await users.findOne(query);
    //console.log("users are: ",users)
    if (query == null || user == null) {
      return { isSuccess: false, data: {}, message: "Invalid User info" };
    }
    console.log(user)
    return { isSuccess: true, data: { user } };
  }

}
