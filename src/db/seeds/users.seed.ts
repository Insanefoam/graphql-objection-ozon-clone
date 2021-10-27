import * as Knex from 'knex';
import * as Faker from 'faker';

export async function seed(knex: Knex): Promise<void> {
  const fakeUsers = new Array(20).fill(undefined).map(() => ({
    name: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
  }));

  await knex('users').insert(fakeUsers);
}
