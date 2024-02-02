const Model = require("./Model.js");

class Experience extends Model {
  static get tableName() {
    return "experiences";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "description", "order"],
      properties: {
        title: { type: "string", minLength: 1, maxLength: 255 },
        description: { type: "string", minLength: 1, maxLength: 255 },
        order: { type: ["string", "number"], minLength: 1 },
      },
    };
  }
}

module.exports = Experience;
