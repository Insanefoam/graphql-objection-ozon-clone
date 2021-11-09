import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export abstract class BaseProblem {
  @Field()
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}
