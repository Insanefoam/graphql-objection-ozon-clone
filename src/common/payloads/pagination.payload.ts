import { Type } from '@nestjs/common';
import { Field, ObjectType } from '@nestjs/graphql';

export function CreatePaginatedPayload<T>(classRef: Type<T>): any {
  @ObjectType(`Paginated${classRef.name}Payload`)
  class PaginatedType {
    @Field(() => [classRef])
    results: T[];

    @Field()
    total: number;
  }

  return PaginatedType;
}
