import { Module } from '@nestjs/common';
import {
  ItemFieldsResolver,
  ItemMutationResolver,
  ItemQueryResolver,
} from './resolvers';

@Module({
  providers: [ItemFieldsResolver, ItemMutationResolver, ItemQueryResolver],
})
export class ItemsModule {}
