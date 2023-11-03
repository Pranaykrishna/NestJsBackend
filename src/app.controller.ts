/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

}


