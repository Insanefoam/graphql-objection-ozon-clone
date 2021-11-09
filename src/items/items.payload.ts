import { Field, ObjectType } from '@nestjs/graphql';
import { BasePayload, CreatePaginatedPayload } from 'src/common/payloads';
import { BaseProblem } from 'src/common/problems';
import { ProblemTypes } from 'src/common/problems/problems.types';
import { Favorite, Item } from 'src/db/models';

@ObjectType()
export class GetManyItemsPayload extends CreatePaginatedPayload(Item) {}

@ObjectType()
export class ToggleFavoriteProblem extends BaseProblem {
  constructor() {
    super(ProblemTypes.ITEM_IS_NOT_IN_FAVORITE);
  }
}

@ObjectType()
export class ToggleFavoritePayload
  implements BasePayload<Favorite, ToggleFavoriteProblem>
{
  @Field(() => Favorite, { nullable: true })
  node?: Favorite;

  @Field(() => ToggleFavoriteProblem, { nullable: true })
  problem?: ToggleFavoriteProblem;
}

@ObjectType()
export class GetFavoriteItemsPayload extends CreatePaginatedPayload(Favorite) {}
