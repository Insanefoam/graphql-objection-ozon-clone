import * as Knex from 'knex';
import { User } from '../models/user.model';

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await knex.schema.createTable(User.tableName, (tableBuilder) => {
    tableBuilder
      .uuid('id')
      .defaultTo(knex.raw('uuid_generate_v4()'))
      .unique()
      .primary();
    tableBuilder.string('name').nullable();

    tableBuilder
      .dateTime('createdAt')
      .defaultTo(knex.raw('current_timestamp'))
      .notNullable();
    tableBuilder
      .dateTime('updatedAt')
      .defaultTo(knex.raw('current_timestamp'))
      .notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(User.tableName);
}
