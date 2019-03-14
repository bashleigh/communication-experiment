import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from 'nestjs-config-v2-test';

@Module({
  imports: [ConfigModule.forRootAsync('config/*/!(*.d).{ts,js}')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
