import { Resolver, Query, Args, ResolveField } from '@nestjs/graphql';
import { PaginationArgs } from 'src/common/args';
import { Item } from 'src/db/models';
import { GetManyItemsPayload } from '../items.payload';
import { ItemQueriesNamespace } from '../items.types';

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
    console.log('In items query resolver');
    const result = await Item.query().page(args.page, args.limit);

    return result;
  }
}
