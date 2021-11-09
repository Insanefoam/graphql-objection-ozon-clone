import { ObjectType } from '@nestjs/graphql';
import { FieldFromResolver } from 'src/common/decorators';
import { User } from 'src/db/models';
import { GetMePayload } from './users.payload';

@ObjectType()
export class UserQueriesNamespace {
  @FieldFromResolver(() => GetMePayload)
  getMe: GetMePayload;

  @FieldFromResolver(() => [User])
  getMany: User[];
}

@ObjectType()
export class UserMutationsNamespace {
  @FieldFromResolver(() => User)
  updateMe: User;
}
