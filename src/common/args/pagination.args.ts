import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field({ defaultValue: 1 })
  page: number;

  @Field({ defaultValue: 25 })
  limit: number;
}
