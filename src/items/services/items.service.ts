import { Injectable } from '@nestjs/common';
import { PaginationArgs } from 'src/common/args';
import { Item } from 'src/db/models';
import { CreateItemInput } from '../items.inputs';
import { GetManyItemsPayload } from '../items.payload';

@Injectable()
export class ItemsService {
  async getManyItems(args: PaginationArgs): Promise<GetManyItemsPayload> {
    const result = await Item.query().page(args.page, args.limit);

    return result;
  }

  async createOneItem(input: CreateItemInput): Promise<Item> {
    const newItem = await Item.query().insert(input);

    return newItem;
  }

  async updateOneItem(input: CreateItemInput, id: string): Promise<Item> {
    const updatedItem = await Item.query().patchAndFetchById(id, { ...input });

    return updatedItem;
  }
}
