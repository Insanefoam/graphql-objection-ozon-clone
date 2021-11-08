import { Module } from '@nestjs/common';
import { CategoriesFieldResolver, CategoriesResolver } from './resolvers';

@Module({
  providers: [CategoriesResolver, CategoriesFieldResolver],
})
export class CategoriesModule {}
