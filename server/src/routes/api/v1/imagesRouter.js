import express from "express";
import { Image } from "../../../models/index.js";
import { ValidationError } from "objection";
import ImageSerializer from "../../../serializers/ImageSerializer.js";
import uploadImage from "../../../services/UploadImage.js";
import deleteImage from "../../../services/DeleteImage.js";

const imagesRouter = new express.Router();

imagesRouter.get("/carousel", async (req, res) => {
  try {
    const response = await Image.query().where("carousel", true).orderBy("order");
    const images = response.map((image) => {
      return ImageSerializer.cleanImage(image);
    });

    return res.status(200).json({ images });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

imagesRouter.get("/years", async (req, res) => {
  try {
    const response = await Image.query()
      .distinct("year")
      .where("carousel", false)
      .orderBy("year", "desc");
    const years = response.map((year) => year.year);

    return res.status(200).json({ years });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

imagesRouter.get("/:year", async (req, res) => {
  try {
    const { year } = req.params;
    const yearImages = await Image.query()
      .where("year", year)
      .orderBy("order")
      .where("carousel", false);

    return res.status(200).json({ yearImages });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

imagesRouter.get("/image/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const response = await Image.query().where("title", title);
    const image = response[0];

    const serializedImage = ImageSerializer.cleanImage(image);
    return res.status(200).json({ image: serializedImage });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

imagesRouter.post("/", uploadImage.single("image"), async (req, res) => {
  try {
    const { body } = req;
    const data = {
      ...body,
      image: req.file.location,
    };
    const newImage = await Image.query().insertAndFetch(data);

    return res.status(201).json({ newImage: newImage });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});

imagesRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const image = await Image.query().findById(id);
    const updatedImage = await image.$query().patchAndFetch(body);

    return res.status(200).json({ updatedImage });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});

imagesRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Image.query().findById(id);
    const key = image.image.split("/").pop();
    await Image.query().deleteById(id);
    deleteImage(key);

    return res.status(200).json({ id });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

export default imagesRouter;
