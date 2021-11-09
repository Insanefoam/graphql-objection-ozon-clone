import { Args, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { IAM } from 'src/common/decorators';
import { User } from 'src/db/models';
import { UpdateMeInput } from '../users.input';
import { UserMutationsNamespace } from '../users.namespaces';

@Resolver(() => UserMutationsNamespace)
export class UsersMutationResolver {
  @Mutation(() => UserMutationsNamespace)
  async users() {
    return {};
  }

  @ResolveField(() => User)
  async updateMe(
    @IAM() user: User,
    @Args('input') input: UpdateMeInput,
  ): Promise<User> {
    return User.query().patchAndFetchById(user.id, { ...user, ...input });
  }
}
