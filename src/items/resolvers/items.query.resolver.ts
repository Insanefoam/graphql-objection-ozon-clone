import { Resolver, Query } from '@nestjs/graphql';
import { Item } from 'src/db/models';

@Resolver(() => Item)
export class ItemQueryResolver {
  @Query(() => [Item])
  async getManyItems(): Promise<Item[]> {
    return Item.query().orderBy('createdAt', 'DESC');
  }
}
