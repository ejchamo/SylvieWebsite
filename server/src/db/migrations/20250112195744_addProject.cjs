/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table("images", (table) => {
    table.string("project").notNullable().defaultTo("New");
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.table("images", (table) => {
    table.dropColumn("project");
  });
};
