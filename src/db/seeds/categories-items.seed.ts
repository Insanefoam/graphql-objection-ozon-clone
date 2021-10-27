import * as Faker from 'faker';
import * as Knex from 'knex';
import { Category } from '../models/category.model';

export async function seed(knex: Knex): Promise<void> {
  const fakeCategories = new Array(10).fill(undefined).map(() => ({
    name: Faker.commerce.productAdjective(),
    items: new Array(10).fill(undefined).map(() => ({
      name: Faker.commerce.productName(),
      price: Faker.datatype.number(1000),
    })),
  }));

  await Category.query(knex).insertGraph(fakeCategories);
}
