import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsString, Max, Min } from 'class-validator';

export class QueryVisitorDto {
  @IsString()
  @ApiProperty()
  shortID: string;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(0)
  @ApiPropertyOptional({ type: Number })
  skip = 0;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(0)
  @Max(50)
  @ApiPropertyOptional({ type: Number })
  limit = 10;
}
