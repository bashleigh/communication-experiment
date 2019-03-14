import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'test' })
  sum(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }
}
