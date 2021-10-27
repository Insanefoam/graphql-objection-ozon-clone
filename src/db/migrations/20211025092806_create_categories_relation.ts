import * as Knex from 'knex';
import { dbDefaultUUIDValue } from '../../utils/knex';
import { Category } from '../models/category.model';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(Category.tableName, (tableBuilder) => {
    tableBuilder
      .uuid('id')
      .defaultTo(knex.raw(dbDefaultUUIDValue))
      .unique()
      .primary();
    tableBuilder.string('name').notNullable();

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
  await knex.schema.dropTable(Category.tableName);
}
