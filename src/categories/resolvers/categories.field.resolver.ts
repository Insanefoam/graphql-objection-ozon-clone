import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Category, Item } from 'src/db/models';

@Resolver(() => Category)
export class CategoriesFieldResolver {
  @ResolveField(() => [Item])
  async items(@Parent() root: Category) {
    return Category.relatedQuery('items').for(root.id);
  }
}
