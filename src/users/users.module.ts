import { Module } from '@nestjs/common';
import { UsersQueryResolver } from './resolvers';

@Module({
  providers: [UsersQueryResolver],
})
export class UsersModule {}
