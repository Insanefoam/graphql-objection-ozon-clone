import { Field, ObjectType } from '@nestjs/graphql';
import { SuccessSignInPayload, SuccessSignUpPayload } from './auth.payloads';

@ObjectType()
export class AuthMutationsNamespace {
  @Field(() => SuccessSignInPayload)
  signIn: SuccessSignInPayload;

  @Field(() => SuccessSignUpPayload)
  signUp: SuccessSignUpPayload;
}

export class JwtPayload {
  id: string;
  name: string;
  email: string;
}
