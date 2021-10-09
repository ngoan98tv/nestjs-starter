import { ApiProperty } from '@nestjs/swagger';

export class CreateVisitorDto {
  @ApiProperty()
  shortID: string;

  @ApiProperty()
  ua: string;

  @ApiProperty()
  ip?: string;

  @ApiProperty()
  browser?: string;

  @ApiProperty()
  os?: string;

  @ApiProperty()
  device?: string;
}
