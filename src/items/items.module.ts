import { Module } from '@nestjs/common';
import { CategoriesModule } from 'src/categories/categories.module';
import {
  ItemFieldsResolver,
  ItemMutationResolver,
  ItemQueryResolver,
} from './resolvers';

@Module({
  imports: [CategoriesModule],
  providers: [ItemFieldsResolver, ItemMutationResolver, ItemQueryResolver],
})
export class ItemsModule {}
