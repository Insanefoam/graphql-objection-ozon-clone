import { ParseUUIDPipe } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Item } from 'src/db/models';
import { CreateItemInput } from '../items.inputs';

@Resolver(() => Item)
export class ItemMutationResolver {
  @Mutation(() => Item)
  async createOneItem(@Args('input') input: CreateItemInput): Promise<Item> {
    const newItem = await Item.query().insert(input);

    return newItem;
  }

  @Mutation(() => Item)
  async updateOneItem(
    @Args('input') input: CreateItemInput,
    @Args('id', ParseUUIDPipe) id: string,
  ): Promise<Item> {
    const updatedItem = await Item.query().patchAndFetchById(id, { ...input });

    return updatedItem;
  }
}
