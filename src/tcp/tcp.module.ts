import { Module } from '@nestjs/common';
import { TcpController } from './controller';
import { ConfigModule } from 'nestjs-config-v2-test';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRootAsync({
      glob: path.resolve(__dirname, '..', 'config', '**/!(*.d).{ts,js}'),
      dotenv: {
        path: path.resolve(__dirname, '..', '..', '.env'),
      },
    }),
  ],
  controllers: [TcpController],
})
export class TcpModule {}
