const Model = require("./Model.js");

class Image extends Model {
  static get tableName() {
    return "images";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "year", "medium", "dimensions", "image", "order", "project"],
      properties: {
        title: { type: "string", minLength: 1, maxLength: 255 },
        year: { type: ["string", "number"], minLength: 1 },
        medium: { type: "string", minLength: 1, maxLength: 255 },
        dimensions: { type: "string", minLength: 1, maxLength: 255 },
        image: { type: "string", minLength: 1, maxLength: 255 },
        order: { type: ["string", "number"], minLength: 1 },
        carousel: { type: ["string", "boolean"] },
        project: { type: "string", minLength: 1, maxLength: 255 },
      },
    };
  }
}

module.exports = Image;
