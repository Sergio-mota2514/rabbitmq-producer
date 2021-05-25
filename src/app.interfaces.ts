import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PostBodyDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'The object to send to RabbitMQ queue.',
    minimum: 1,
    default: { propertyExample: 'valueExample' },
  })
  obj: object;
}
