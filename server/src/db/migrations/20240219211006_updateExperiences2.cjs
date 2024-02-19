/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table("experiences", (table) => {
    table.string("exhibitionName");
    table.text("description");
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.table("experiences", (table) => {
    table.dropColumn("exhibitionName");
    table.dropColumn("description");
  });
};
