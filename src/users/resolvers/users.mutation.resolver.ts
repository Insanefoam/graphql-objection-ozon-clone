import { Resolver } from '@nestjs/graphql';
import { User } from 'src/db/models';

@Resolver(() => User)
export class UsersMutationResolver {}
