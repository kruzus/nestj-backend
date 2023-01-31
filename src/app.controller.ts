import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello/:name')
  greetUser(@Param('name') name: string) {
    try {
      return { msg: `hello ${name}` };
    } catch (e) {
      return { error: e };
    }
  }
}
