import { Field, ObjectType } from '@nestjs/graphql';
import { Model, RelationMappings } from 'objection';
import { FieldFromResolver } from 'src/common/decorators';
import { Item, User } from '.';
import { BaseModel } from './base';

@ObjectType()
export class Favorite extends BaseModel {
  static get tableName() {
    return 'favorites';
  }

  @FieldFromResolver(() => User)
  user: User;

  @Field(() => String)
  userId: User['id'];

  @FieldFromResolver(() => Item)
  item: Item;

  @Field(() => String)
  itemId: Item['id'];

  static relationMappings: RelationMappings = {
    user: {
      modelClass: 'user.model',
      join: { from: 'users.id', to: 'favorites.userId' },
      relation: Model.HasOneRelation,
    },
    item: {
      modelClass: 'item.model',
      join: { from: 'items.id', to: 'favorites.itemId' },
      relation: Model.HasOneRelation,
    },
  };
}
