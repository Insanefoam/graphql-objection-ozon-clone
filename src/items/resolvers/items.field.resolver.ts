import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Category, Item } from 'src/db/models';

@Resolver(() => Item)
export class ItemsFieldResolver {
  @ResolveField(() => [Category])
  async categories(@Parent() item: Item): Promise<Category[]> {
    return Item.relatedQuery('categories').for(item.id);
  }
}
