import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostBodyDto } from './app.interfaces';
import { RabbitMQService } from './rabbitmq/rabbitmq.service';

@Controller()
@ApiTags('rabbitMQProducer')
export class AppController {
  constructor(private readonly rabbitMQService: RabbitMQService) {}

  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  public async sendToRabbit(@Body() obj: PostBodyDto): Promise<void> {
    await this.rabbitMQService.send('rabbit-mq-producer', {
      message: obj,
    });
  }
}
