import { ObjectType } from '@nestjs/graphql';
import { FieldFromResolver } from 'src/common/decorators';
import { Item } from 'src/db/models';
import { GetManyItemsPayload } from './items.payload';

@ObjectType()
export class ItemQueriesNamespace {
  @FieldFromResolver(() => GetManyItemsPayload)
  getManyItems: GetManyItemsPayload;
}

@ObjectType()
export class ItemMutationsNamespace {
  @FieldFromResolver(() => Item)
  createOneItem: Item;

  @FieldFromResolver(() => Item)
  updateOneItem: Item;
}
