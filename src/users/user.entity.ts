import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Model } from 'objection';

@ObjectType()
export class User extends Model {
  static tableName = 'users';

  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}
