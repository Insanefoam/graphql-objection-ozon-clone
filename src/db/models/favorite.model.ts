import { Field, ObjectType } from '@nestjs/graphql';
import { FieldFromResolver } from 'src/common/decorators';
import { Item, User } from '.';
import { BaseModel } from './base';

@ObjectType()
export class Favorite extends BaseModel {
  @FieldFromResolver(() => User)
  user: User;

  @Field(() => String)
  userId: User['id'];

  @FieldFromResolver(() => Item)
  item: Item;

  @Field(() => String)
  itemId: Item['id'];
}
