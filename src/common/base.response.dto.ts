/* eslint-disable prettier/prettier */


import { UserDTO } from '../user/user.dto';

export interface BaseResponse {
    isSuccess: boolean;
    data: any;
    message?: string;
}

export interface SuccessBaseResponse extends BaseResponse {
    isSuccess: true
}

export interface GetUserSuccessResponse extends SuccessBaseResponse {
    data: UserDTO;
}