import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from './base';

@ObjectType()
export class User extends BaseModel {
  static get tableName() {
    return 'users';
  }

  @Field()
  name: string;
}
