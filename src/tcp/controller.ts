import { Controller, Get } from '@nestjs/common';
import {
  MessagePattern,
  Client,
  ClientProxy,
  Transport,
} from '@nestjs/microservices';

@Controller('tcp')
export class TcpController {
  @Client({
    transport: Transport.TCP,
    options: {
      port: 3002,
    },
  })
  client: ClientProxy;

  @MessagePattern({ cmd: 'test' })
  sum(data: number[]): number {
    console.log(data);
    return (data || []).reduce((a, b) => a + b);
  }

  @Get('test')
  test() {
    return this.client.send({ cmd: 'test' }, [2, 3, 4]);
  }
}
