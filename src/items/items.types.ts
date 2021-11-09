import { ObjectType } from '@nestjs/graphql';
import { FieldFromResolver } from 'src/common/decorators';
import { Favorite, Item } from 'src/db/models';
import { GetFavoriteItemsPayload, GetManyItemsPayload } from './items.payload';

@ObjectType()
export class ItemQueriesNamespace {
  @FieldFromResolver(() => GetManyItemsPayload)
  getManyItems: GetManyItemsPayload;

  @FieldFromResolver(() => GetFavoriteItemsPayload)
  getFavoriteItems: GetFavoriteItemsPayload;
}

@ObjectType()
export class ItemMutationsNamespace {
  @FieldFromResolver(() => Item)
  createOneItem: Item;

  @FieldFromResolver(() => Item)
  updateOneItem: Item;

  @FieldFromResolver(() => Favorite)
  toggleFavorite: Favorite;
}
