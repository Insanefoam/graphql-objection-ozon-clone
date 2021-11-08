import { ParseUUIDPipe } from '@nestjs/common';
import { Args, Mutation, ResolveField, Resolver } from '@nestjs/graphql';
import { Item } from 'src/db/models';
import { CreateItemInput } from '../items.inputs';
import { ItemMutationsNamespace } from '../items.types';

@Resolver(() => ItemMutationsNamespace)
export class ItemsMutationResolver {
  @Mutation(() => ItemMutationsNamespace, { name: 'items' })
  async rootResolver() {
    return {};
  }

  @ResolveField(() => Item)
  async createOneItem(@Args('input') input: CreateItemInput): Promise<Item> {
    const newItem = await Item.query().insert(input);

    return newItem;
  }

  @ResolveField(() => Item)
  async updateOneItem(
    @Args('input') input: CreateItemInput,
    @Args('id', ParseUUIDPipe) id: string,
  ): Promise<Item> {
    const updatedItem = await Item.query().patchAndFetchById(id, { ...input });

    return updatedItem;
  }
}
