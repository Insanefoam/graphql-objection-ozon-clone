import { Field, InputType } from '@nestjs/graphql';
import { UrlScalar } from 'src/common/scalars';

@InputType()
export class UpdateMeInput {
  @Field()
  name: string;

  @Field(() => UrlScalar, { nullable: true })
  avatarUrl?: string;

  @Field(() => Date, { nullable: true })
  birthday?: string;
}
