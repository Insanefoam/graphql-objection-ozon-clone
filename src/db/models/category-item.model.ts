import { Field, ObjectType } from '@nestjs/graphql';
import { Model } from 'objection';
import { Category } from './category.model';
import { BaseModel } from './base';
import { Item } from './item.model';
import { FieldFromResolver } from 'src/common/decorators';

@ObjectType()
export class CategoryItem extends BaseModel {
  static get tableName() {
    return 'categories_items';
  }

  @FieldFromResolver(() => Category)
  category: Category;

  @Field()
  categoryId: string;

  @FieldFromResolver(() => Item)
  item: Item;

  @Field()
  itemId: string;

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
