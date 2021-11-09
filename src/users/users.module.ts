import { Module } from '@nestjs/common';
import { UsersQueryResolver } from './resolvers';
import { UsersMutationResolver } from './resolvers/users.mutation.resolver';

@Module({
  providers: [UsersQueryResolver, UsersMutationResolver],
})
export class UsersModule {}
