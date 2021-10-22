import { Module } from '@nestjs/common';
import { UsersResolver } from './resolvers';

@Module({
  providers: [UsersResolver],
})
export class UsersModule {}
