import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Public } from 'src/common/decorators';
import { SignInInput, SignUpInput } from '../auth.inputs';
import { SuccessSignInPayload, SuccessSignUpPayload } from '../auth.payloads';
import { AuthService } from '../services';

@Resolver()
export class AuthMutationResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Mutation(() => SuccessSignInPayload, { nullable: true })
  async signIn(
    @Args('input') input: SignInInput,
  ): Promise<SuccessSignInPayload> {
    return this.authService.signIn(input);
  }

  @Public()
  @Mutation(() => SuccessSignUpPayload)
  async signUp(
    @Args('input') input: SignUpInput,
  ): Promise<SuccessSignUpPayload> {
    return this.authService.signUp(input);
  }
}
