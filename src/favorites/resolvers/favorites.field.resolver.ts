import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Favorite, Item } from 'src/db/models';

@Resolver(() => Favorite)
export class FavoritesFieldResolver {
  @ResolveField()
  async item(@Parent() parent: Favorite): Promise<Item> {
    return Item.query().findById(parent.itemId);
  }
}
