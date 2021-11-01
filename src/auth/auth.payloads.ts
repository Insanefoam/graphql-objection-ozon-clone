import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/db/models';

@ObjectType()
export class SuccessSignInPayload {
  @Field(() => User)
  user: User;

  @Field()
  token: string;
}

@ObjectType()
export class SuccessSignUpPayload {
  @Field(() => User)
  user: User;

  @Field()
  token: string;
}
