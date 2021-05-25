import { IsNotEmpty } from 'class-validator';

export class PostBodyDto {
  @IsNotEmpty()
  obj: object;
}
