import { ParseUUIDPipe } from '@nestjs/common';
import { Resolver, Query, ResolveField, Parent, Args } from '@nestjs/graphql';
import { Category, Item } from 'src/db/models';

@Resolver(() => Category)
export class CategoriesResolver {
  @Query(() => [Category])
  async getManyCategories(): Promise<Category[]> {
    return Category.query();
  }

  @Query(() => Category, { nullable: true })
  async getOneCategory(
    @Args('id', ParseUUIDPipe) id: string,
  ): Promise<Category> {
    return Category.query().findOne('id', id);
  }

  @ResolveField('items', () => [Item])
  async getCategoryItems(@Parent() root: Category) {
    return Category.relatedQuery('items').for(root.id);
  }
}
