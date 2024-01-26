import express from "express";
import { Image } from "../../../models/index.js";
import { ValidationError } from "objection";
import ImageSerializer from "../../../serializers/ImageSerializer.js";

const imagesRouter = new express.Router();

imagesRouter.post("/", async (req, res) => {
  const { body } = req;
  const { title, year, medium, dimensions, imageUrl } = body;

  try {
    const newImage = await Image.query().insertAndFetch({
      title,
      year,
      medium,
      dimensions,
      imageUrl,
    });

    const serializedImage = ImageSerializer.cleanImage(newImage);
    return res.status(201).json({ newImage: serializedImage });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});

export default imagesRouter;
