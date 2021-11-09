import { Resolver, Query, ResolveField } from '@nestjs/graphql';
import { IAM } from 'src/common/decorators';
import { User } from '../../db/models/user.model';
import { GetMePayload } from '../users.payload';
import { UserQueriesNamespace } from '../users.namespaces';

@Resolver(() => UserQueriesNamespace)
export class UsersQueryResolver {
  @Query(() => UserQueriesNamespace)
  async users() {
    return {};
  }

  @ResolveField(() => GetMePayload)
  async getMe(@IAM() iam: User) {
    return iam;
  }

  @ResolveField(() => [User])
  async getMany(): Promise<User[]> {
    const users = await User.query();

    return users;
  }
}
