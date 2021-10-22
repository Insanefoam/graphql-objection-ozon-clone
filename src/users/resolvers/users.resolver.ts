import { Resolver, Query } from '@nestjs/graphql';
import { User } from '../user.entity';

@Resolver(() => User)
export class UsersResolver {
  @Query(() => User)
  async user(): Promise<User> {
    return User.query().findById(321);
  }
}
