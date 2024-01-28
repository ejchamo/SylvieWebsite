const Model = require("./Model.js");

class Image extends Model {
  static get tableName() {
    return "images";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "year", "medium", "dimensions", "image"],
      properties: {
        title: { type: "string", minLength: 1, maxLength: 255 },
        year: { type: "string", minLength: 4, maxLength: 4 },
        medium: { type: "string", minLength: 1, maxLength: 255 },
        dimensions: { type: "string", minLength: 1, maxLength: 255 },
        image: { type: "string", minLength: 1, maxLength: 255 },
      },
    };
  }
}

module.exports = Image;
