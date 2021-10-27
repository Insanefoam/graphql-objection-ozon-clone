import { Field, ObjectType } from '@nestjs/graphql';
import { Model } from 'objection';
import { Item } from '.';
import { BaseModel } from './base';

@ObjectType()
export class Category extends BaseModel {
  static get tableName() {
    return 'categories';
  }

  @Field()
  name: string;

  @Field(() => [Item])
  items: Item[];

  static relationMappings = {
    items: {
      relation: Model.ManyToManyRelation,
      modelClass: 'item.model',
      join: {
        from: 'categories.id',
        through: {
          from: 'categories_items.categoryId',
          to: 'categories_items.itemId',
        },
        to: 'items.id',
      },
    },
  };
}
