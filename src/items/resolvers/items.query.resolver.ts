import { Resolver, Query, Args } from '@nestjs/graphql';
import { PaginationArgs } from 'src/common/args';
import { Item } from 'src/db/models';
import { GetManyItemsPayload } from '../items.payload';

@Resolver(() => Item)
export class ItemQueryResolver {
  @Query(() => GetManyItemsPayload)
  async getManyItems(
    @Args() args: PaginationArgs,
  ): Promise<GetManyItemsPayload> {
    const result = await Item.query().page(args.page, args.limit);

    return result;
  }
}
