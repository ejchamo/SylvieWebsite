const Model = require("./Model.js");

class Experience extends Model {
  static get tableName() {
    return "experiences";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "description"],
      properties: {
        title: { type: "string", minLength: 1, maxLength: 255 },
        description: { type: "string", minLength: 1, maxLength: 255 },
        order: { type: "integer" },
      },
    };
  }
}

module.exports = Experience;
