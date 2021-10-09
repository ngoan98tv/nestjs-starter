import { ApiProperty } from '@nestjs/swagger';
import { Visitor } from '../schemas/visitor.schema';
import { QueryVisitorDto } from './query-visitor.dto';

export class ArrayVisitorDto {
  @ApiProperty({ type: [Visitor] })
  data: Visitor[];

  @ApiProperty()
  query: QueryVisitorDto;

  @ApiProperty()
  total: number;
}
