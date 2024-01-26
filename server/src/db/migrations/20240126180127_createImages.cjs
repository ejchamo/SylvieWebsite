/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("images", (table) => {
    table.bigIncrements("id");
    table.string("title").notNullable();
    table.integer("year").notNullable();
    table.string("medium").notNullable();
    table.string("dimensions").notNullable();
    table.string("imageUrl").notNullable();
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTable("images");
};
