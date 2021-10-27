import { Module } from '@nestjs/common';
import { CategoriesResolver } from './resolvers';

@Module({
  providers: [CategoriesResolver],
})
export class CategoriesModule {}
