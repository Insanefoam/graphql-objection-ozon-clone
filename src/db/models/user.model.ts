import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { EmailScalar, UrlScalar } from '../../common/scalars';
import { BaseModel } from './base';

@ObjectType()
export class User extends BaseModel {
  static get tableName() {
    return 'users';
  }

  @Field(() => EmailScalar)
  email: string;

  password: string;

  @Field()
  name: string;

  @Field(() => UrlScalar, { nullable: true })
  avatarUrl?: string;

  @Field(() => Date, { nullable: true })
  birthday?: string;
}
