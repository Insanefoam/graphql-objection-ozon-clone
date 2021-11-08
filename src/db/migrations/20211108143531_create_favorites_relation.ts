import * as Knex from 'knex';
import { dbDefaultUUIDValue } from '../../utils/knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await knex.schema.createTable('favorites', (tableBuilder) => {
    tableBuilder
      .uuid('id')
      .defaultTo(knex.raw(dbDefaultUUIDValue))
      .unique()
      .primary();

    tableBuilder.uuid('userId');
    tableBuilder.uuid('itemId');
    tableBuilder.unique(['userId', 'itemId']);

    tableBuilder.foreign('userId').references('users.id').onDelete('cascade');
    tableBuilder.foreign('itemId').references('items.id').onDelete('cascade');

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
  await knex.schema.dropTable('favorites');
}
