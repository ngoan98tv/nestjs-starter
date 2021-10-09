import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVisitorDto } from './dto/create-visitor.dto';
import { QueryVisitorDto } from './dto/query-visitor.dto';
import { UpdateVisitorDto } from './dto/update-visitor.dto';
import { Visitor, VisitorDocument } from './schemas/visitor.schema';

@Injectable()
export class VisitorsService {
  constructor(
    @InjectModel(Visitor.name) private visitorModel: Model<VisitorDocument>,
  ) {}

  create(createVisitorDto: CreateVisitorDto) {
    return this.visitorModel.create(createVisitorDto);
  }

  count(query: QueryVisitorDto) {
    const filter = {};
    if (query.shortID) {
      filter['shortID'] = query.shortID;
    }
    return this.visitorModel.countDocuments(filter);
  }

  findAll(query: QueryVisitorDto) {
    const filter = {};
    if (query.shortID) {
      filter['shortID'] = query.shortID;
    }
    return this.visitorModel.find(filter).skip(query.skip).limit(query.limit);
  }

  findOne(id: string) {
    return this.visitorModel.findById(id);
  }

  update(id: string, updateVisitorDto: UpdateVisitorDto) {
    return this.visitorModel.findByIdAndUpdate(id, updateVisitorDto);
  }

  remove(id: string) {
    return this.visitorModel.findByIdAndDelete(id);
  }
}
