import { ObjectType } from '@nestjs/graphql';
import { FieldFromResolver } from 'src/common/decorators';
import { Category } from 'src/db/models';

@ObjectType()
export class CategoryQueriesNamespace {
  @FieldFromResolver(() => [Category])
  getManyCategories: Category[];

  @FieldFromResolver(() => Category)
  getOneCategory: Category;
}
