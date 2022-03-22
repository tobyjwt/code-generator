import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { JsonSchema, JsonSchemaDocument } from "../schemas/jsonSchema";
import { InjectModel } from '@nestjs/mongoose';
import {SchemaListResponse} from '../types';

@Injectable()
export class SchemaService {
  constructor(
    @InjectModel(JsonSchema.name) private readonly jsonSchemaModal: Model<JsonSchemaDocument>,
  ) {
  }

  async getSchemaList(): Promise<[null | Error, SchemaListResponse | null]> {
    try {
      const count = await this.jsonSchemaModal.countDocuments();
      const list = await this.jsonSchemaModal.find();
      return [null, {
        total: count,
        list
      }];
    } catch (e) {
      return [new Error(e), null];
    }
  }
}
