import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  createUser(): string {
    return 'User Created';
  }
  getHello(): string {
    return 'Hello World!';
  }
}
