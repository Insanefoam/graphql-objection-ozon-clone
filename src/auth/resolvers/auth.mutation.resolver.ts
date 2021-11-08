import { Args, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Public } from 'src/common/decorators';
import { SignInInput, SignUpInput } from '../auth.inputs';
import { SuccessSignInPayload, SuccessSignUpPayload } from '../auth.payloads';
import { AuthMutationsNamespace } from '../auth.types';
import { AuthService } from '../services';

@Resolver(() => AuthMutationsNamespace)
export class AuthMutationResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthMutationsNamespace)
  async auth() {
    return {};
  }

  @Public()
  @ResolveField(() => SuccessSignInPayload, { nullable: true })
  async signIn(
    @Args('input') input: SignInInput,
  ): Promise<SuccessSignInPayload> {
    return this.authService.signIn(input);
  }

  @Public()
  @ResolveField(() => SuccessSignUpPayload)
  async signUp(
    @Args('input') input: SignUpInput,
  ): Promise<SuccessSignUpPayload> {
    return this.authService.signUp(input);
  }
}
