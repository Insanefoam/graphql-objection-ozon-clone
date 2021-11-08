import { Module } from '@nestjs/common';
import { CategoriesModule } from 'src/categories/categories.module';
import {
  ItemsFieldResolver,
  ItemsMutationResolver,
  ItemsQueryResolver,
} from './resolvers';
import { ItemsService } from './services';

@Module({
  imports: [CategoriesModule],
  providers: [
    ItemsFieldResolver,
    ItemsMutationResolver,
    ItemsQueryResolver,
    ItemsService,
  ],
})
export class ItemsModule {}
