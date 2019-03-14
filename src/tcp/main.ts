import { NestFactory } from '@nestjs/core';
import { TcpModule } from './tcp.module';
import { Transport } from '@nestjs/microservices';
import TCPConfig from 'config/tcp';

async function bootstrap() {
  const app = await NestFactory.create(TcpModule);

  const config = app.get(TCPConfig);

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      retryAttempts: 5,
      retryDelay: 3000,
      port: config.port,
    },
  });
  await app.startAllMicroservicesAsync();
  await app.listen(3001);
}
bootstrap();
