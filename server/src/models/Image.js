const Model = require("./Model.js");

class Image extends Model {
  static get tableName() {
    return "images";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "year", "medium", "dimensions", "imageUrl"],
      properties: {
        title: { type: "string", minLength: 1, maxLength: 255 },
        year: { type: "integer" },
        medium: { type: "string", minLength: 1, maxLength: 255 },
        dimensions: { type: "string", minLength: 1, maxLength: 255 },
        imageUrl: { type: "string", minLength: 1, maxLength: 255 },
      },
    };
  }
}

module.exports = Image;
