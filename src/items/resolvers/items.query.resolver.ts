import { Resolver, Query, Args, ResolveField } from '@nestjs/graphql';
import { PaginationArgs } from 'src/common/args';
import { IAM } from 'src/common/decorators';
import { Favorite, Item, User } from 'src/db/models';
import { GetFavoriteItemsPayload, GetManyItemsPayload } from '../items.payload';
import { ItemQueriesNamespace } from '../items.namespaces';

@Resolver(() => ItemQueriesNamespace)
export class ItemsQueryResolver {
  @Query(() => ItemQueriesNamespace, { name: 'items' })
  async rootResolver() {
    return {};
  }

  @ResolveField(() => GetManyItemsPayload)
  async getManyItems(
    @Args() args: PaginationArgs,
  ): Promise<GetManyItemsPayload> {
    const result = await Item.query().page(args.page, args.limit);

    return result;
  }

  @ResolveField(() => [GetFavoriteItemsPayload])
  async getFavoriteItems(@IAM() user: User): Promise<GetFavoriteItemsPayload> {
    const result = await Favorite.query().where('userId', user.id).page(0, 100);

    return result;
  }
}
