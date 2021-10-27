import { Resolver, Query } from '@nestjs/graphql';
import { User } from '../../db/models/user.model';

@Resolver(() => User)
export class UsersQueryResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    const users = await User.query();

    return users;
  }
}
