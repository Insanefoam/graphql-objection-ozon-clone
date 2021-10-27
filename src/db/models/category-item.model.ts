import { Field, ObjectType } from '@nestjs/graphql';
import { Model } from 'objection';
import { Category } from './category.model';
import { BaseModel } from './base';
import { Item } from './item.model';

@ObjectType()
export class CategoryItem extends BaseModel {
  static get tableName() {
    return 'categories_items';
  }

  @Field(() => Category)
  category: Category;

  @Field(() => Item)
  item: Item;

  static relationMappings = {
    category: {
      relation: Model.HasManyRelation,
      modelClass: 'category.model',
      join: {
        from: 'categories_items.categoryId',
        to: 'categories.id',
      },
    },
    item: {
      relation: Model.HasManyRelation,
      modelClass: 'item.model',
      join: {
        from: 'categories_items.itemId',
        to: 'items.id',
      },
    },
  };
}
