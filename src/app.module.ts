import { RabbitMQModule } from './rabbitmq/rabbitmq.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [RabbitMQModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
