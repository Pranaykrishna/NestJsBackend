/* eslint-disable prettier/prettier */

import { CreateUserDto } from "../users/dto/create-user.dto";


export interface BaseResponse {
    isSuccess: boolean;
    data: any;
    message?: string;
}

export interface SuccessBaseResponse extends BaseResponse {
    isSuccess: true
}

export interface GetUserSuccessResponse extends SuccessBaseResponse {
    data: CreateUserDto;
}