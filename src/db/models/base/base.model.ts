import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Model } from 'objection';
import { join } from 'path';

@ObjectType()
export class BaseModel extends Model {
  static get idColumn() {
    return 'id';
  }

  @Field(() => ID)
  id: string;

  @Field(() => Date)
  updatedAt: string;

  @Field(() => Date)
  createdAt: string;

  $beforeInsert() {
    this.createdAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  static get modelPaths() {
    return [join(__dirname, '..')];
  }
}
