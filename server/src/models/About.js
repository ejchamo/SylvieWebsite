const Model = require("./Model.js");

class About extends Model {
  static get tableName() {
    return "about";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["details"],
      properties: {
        description: { type: "string" },
      },
    };
  }
}

module.exports = About;
