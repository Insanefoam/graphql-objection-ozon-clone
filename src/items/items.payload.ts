import { ObjectType } from '@nestjs/graphql';
import { CreatePaginatedPayload } from 'src/common/payloads';
import { Item } from 'src/db/models';

@ObjectType()
export class GetManyItemsPayload extends CreatePaginatedPayload(Item) {}
