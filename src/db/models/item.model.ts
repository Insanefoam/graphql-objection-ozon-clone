import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Model } from 'objection';
import { BaseModel } from './base';
import { Category } from '.';
import { FieldFromResolver } from 'src/common/decorators';

@ObjectType()
export class Item extends BaseModel {
  static get tableName() {
    return 'items';
  }

  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  @FieldFromResolver(() => [Category])
  categories: Category[];

  static relationMappings = {
    categories: {
      relation: Model.ManyToManyRelation,
      modelClass: 'category.model',
      join: {
        from: 'items.id',
        through: {
          from: 'categories_items.itemId',
          to: 'categories_items.categoryId',
        },
        to: 'categories.id',
      },
    },
  };
}
