/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.alterTable("images", (table) => {
    table.string("year").alter(); // Altering the 'year' column to be a string
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.alterTable("images", (table) => {
    table.integer("year").alter(); // Reverting back to integer if needed
  });
};
