import express from "express";
import { Image } from "../../../models/index.js";
import { ValidationError } from "objection";
import ImageSerializer from "../../../serializers/ImageSerializer.js";
import uploadImage from "../../../services/UploadImage.js";

const imagesRouter = new express.Router();

imagesRouter.post("/", uploadImage.single("image"), async (req, res) => {
  try {
    const { body } = req;
    const data = {
      ...body,
      image: req.file.location,
    };
    const newImage = await Image.query().insertAndFetch(data);

    const serializedImage = ImageSerializer.cleanImage(newImage);
    return res.status(201).json({ newImage: serializedImage });
  } catch (error) {
    console.log("ERROR LOG", error);
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});

export default imagesRouter;
