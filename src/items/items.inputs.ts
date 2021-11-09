import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsDefined, IsUUID } from 'class-validator';

@InputType()
export class CreateItemInput {
  @Field()
  name: string;

  @Field()
  price: number;
}

@InputType()
export class ToggleFavoriteInput {
  @IsDefined()
  @IsUUID()
  @Field()
  itemId: string;

  @IsDefined()
  @IsBoolean()
  @Field()
  isFavorite: boolean;
}
