import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type VisitorDocument = Visitor & Document;

@Schema()
export class Visitor {
  @Prop({ required: true })
  @ApiProperty()
  shortID: string;

  @Prop({ type: Date, default: Date.now })
  @ApiProperty()
  visitedAt: Date;

  @Prop()
  @ApiProperty()
  ip: string;

  @Prop()
  @ApiProperty()
  browser: string;

  @Prop()
  @ApiProperty()
  os: string;

  @Prop()
  @ApiProperty()
  device: string;

  @Prop()
  @ApiProperty()
  ua: string;
}

export const VisitorSchema = SchemaFactory.createForClass(Visitor);
