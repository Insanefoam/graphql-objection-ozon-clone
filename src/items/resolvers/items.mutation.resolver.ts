import { ParseUUIDPipe } from '@nestjs/common';
import { Args, Mutation, ResolveField, Resolver } from '@nestjs/graphql';
import { IAM } from 'src/common/decorators';
import { Favorite, Item, User } from 'src/db/models';
import { CreateItemInput, ToggleFavoriteInput } from '../items.inputs';
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

  @ResolveField(() => Favorite)
  async toggleFavorite(
    @IAM() user: User,
    @Args('input') input: ToggleFavoriteInput,
  ): Promise<Favorite> {
    const favorite = await Favorite.query().findOne({
      userId: user.id,
      itemId: input.itemId,
    });

    if (!favorite && !input.isFavorite) {
      //TODO Add problem
    }

    if (favorite && input.isFavorite) {
      return favorite;
    }

    if (!input.isFavorite) {
      await Favorite.query().deleteById(favorite.id);
      return favorite;
    }

    return Favorite.query().insertAndFetch({
      itemId: input.itemId,
      userId: user.id,
    });
  }
}
