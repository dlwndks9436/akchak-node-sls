import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("book", (table) => {
    table.increments("id", { primaryKey: true });
    table.string("title", 50).notNullable();
    table.string("author", 20).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("book");
}
