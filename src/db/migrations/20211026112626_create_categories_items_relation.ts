import * as Knex from 'knex';
import { dbDefaultUUIDValue } from '../../utils/knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('categories_items', (tableBuilder) => {
    tableBuilder
      .uuid('id')
      .defaultTo(knex.raw(dbDefaultUUIDValue))
      .primary()
      .unique();

    tableBuilder.uuid('categoryId');
    tableBuilder.uuid('itemId');
    tableBuilder.unique(['categoryId', 'itemId']);

    tableBuilder
      .foreign('categoryId')
      .references('categories.id')
      .onDelete('cascade');
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
  await knex.schema.dropTable('categories_items');
}
