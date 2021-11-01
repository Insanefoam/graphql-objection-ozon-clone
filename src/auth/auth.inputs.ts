import { Field, InputType } from '@nestjs/graphql';
import { IsDefined, IsEmail, IsString } from 'class-validator';
import { EmailScalar } from 'src/common/scalars';

@InputType()
export class SignInInput {
  @Field(() => EmailScalar)
  @IsDefined()
  @IsEmail()
  email: string;

  @Field()
  @IsDefined()
  @IsString()
  password: string;
}

@InputType()
export class SignUpInput {
  @Field(() => EmailScalar)
  @IsDefined()
  @IsEmail()
  email: string;

  @Field()
  @IsDefined()
  @IsString()
  name: string;

  @Field()
  @IsDefined()
  @IsString()
  password: string;
}
