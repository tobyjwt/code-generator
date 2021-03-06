import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MANGO_TIMESTAMPS_TYPE } from '../types';

export type JsonSchemaDocument = JsonSchema & Document & MANGO_TIMESTAMPS_TYPE;

@Schema({
    timestamps: {
        createdAt: 'createTime',
        updatedAt: 'updateTime',
    }
})
export class JsonSchema extends Document {
    @Prop({ required: true })
    createUser: string;

    @Prop({ required: true })
    config: string;

    @Prop({ required: true })
    updateUser: string;
}

export const JsonSchemaSchema = SchemaFactory.createForClass(JsonSchema);
