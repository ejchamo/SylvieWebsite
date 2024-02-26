/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table("images", (table) => {
    table.string("displaySize").notNullable().defaultTo("large");
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.table("images", (table) => {
    table.dropColumn("displaySize");
  });
};
