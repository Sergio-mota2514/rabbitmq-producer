import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostBodyDto } from './app.interfaces';
import { RabbitMQService } from './rabbitmq/rabbitmq.service';

@Controller()
@ApiTags('rabbitMQProducer')
export class AppController {
  constructor(private readonly rabbitMQService: RabbitMQService) {}

  @Post()
  getHello(@Body() obj: PostBodyDto): void {
    this.rabbitMQService.send('rabbit-mq-producer', {
      message: obj,
    });
  }
}
