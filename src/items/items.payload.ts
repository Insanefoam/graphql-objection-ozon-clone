import { ObjectType } from '@nestjs/graphql';
import { CreatePaginatedPayload } from 'src/common/payloads';
import { Favorite, Item } from 'src/db/models';

@ObjectType()
export class GetManyItemsPayload extends CreatePaginatedPayload(Item) {}

@ObjectType()
export class GetFavoriteItemsPayload extends CreatePaginatedPayload(Favorite) {}
