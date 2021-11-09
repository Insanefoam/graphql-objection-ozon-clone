import { Module } from '@nestjs/common';
import { FavoritesFieldResolver } from './resolvers';

@Module({
  providers: [FavoritesFieldResolver],
})
export class FavoritesModule {}
