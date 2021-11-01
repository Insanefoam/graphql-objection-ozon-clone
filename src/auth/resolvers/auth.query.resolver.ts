import { Resolver, Query } from '@nestjs/graphql';
import { IAM } from 'src/common/decorators';
import { User } from 'src/db/models';

@Resolver()
export class AuthQueryResolver {
  @Query(() => User)
  async getMe(@IAM() iam: User) {
    return iam;
  }
}
