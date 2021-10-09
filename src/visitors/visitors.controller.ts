import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ArrayVisitorDto } from './dto/array-visitor.dto';
import { CreateVisitorDto } from './dto/create-visitor.dto';
import { QueryVisitorDto } from './dto/query-visitor.dto';
import { Visitor } from './schemas/visitor.schema';
import { VisitorsService } from './visitors.service';

@ApiTags('visitors')
@Controller('visitors')
export class VisitorsController {
  constructor(private readonly visitorsService: VisitorsService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all visitors',
  })
  @ApiResponse({
    status: 200,
    description: 'Get success',
    type: ArrayVisitorDto,
  })
  async findAll(@Query() query: QueryVisitorDto) {
    const data = await this.visitorsService.findAll(query).exec();
    const total = await this.visitorsService.count(query);
    return {
      data,
      query,
      total,
    };
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a visitor by id',
  })
  @ApiResponse({
    status: 200,
    description: 'Get success',
    type: Visitor,
  })
  findOne(@Param('id') id: string) {
    return this.visitorsService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a visitor',
  })
  @ApiBody({
    type: CreateVisitorDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Create success',
    type: Visitor,
  })
  create(@Body() createLinkDto: CreateVisitorDto) {
    return this.visitorsService.create(createLinkDto);
  }
}
