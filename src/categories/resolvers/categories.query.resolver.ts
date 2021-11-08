import { ParseUUIDPipe } from '@nestjs/common';
import { Resolver, Query, ResolveField, Parent, Args } from '@nestjs/graphql';
import { Category, Item } from 'src/db/models';
import { CategoryQueriesNamespace } from '../categories.types';

@Resolver(() => CategoryQueriesNamespace)
export class CategoriesResolver {
  @Query(() => CategoryQueriesNamespace)
  async categories() {
    return {};
  }

  @ResolveField(() => [Category])
  async getManyCategories(): Promise<Category[]> {
    return Category.query();
  }

  @ResolveField(() => Category, { nullable: true })
  async getOneCategory(
    @Args('id', ParseUUIDPipe) id: string,
  ): Promise<Category> {
    return Category.query().findOne('id', id);
  }
}
