import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JsonSchemaDocument = JsonSchema & Document;

@Schema({
    timestamps: {
        createdAt: 'createTime',
        updatedAt: 'updateTime'
    }
})
export class JsonSchema extends Document {
    @Prop({ required: true })
    createUser: string;

    @Prop({ required: true })
    scheme: string;

    @Prop({ required: true, type: String })
    updateUser
}

export const JsonSchemaSchema = SchemaFactory.createForClass(JsonSchema);
