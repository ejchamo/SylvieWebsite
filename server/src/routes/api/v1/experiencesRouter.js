import express from "express";
import { Experience } from "../../../models/index.js";
import { ValidationError } from "objection";
import ExperienceSerializer from "../../../serializers/ExperienceSerializer.js";

const experiencesRouter = new express.Router();

experiencesRouter.get("/", async (req, res) => {
  try {
    const experiences = await Experience.query().orderBy("order");
    const serializedExperiences = experiences.map((experience) => {
      return ExperienceSerializer.cleanExperience(experience);
    });

    return res.status(200).json({ experiences: serializedExperiences });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

experiencesRouter.post("/", async (req, res) => {
  try {
    const { body } = req;
    const newExperience = await Experience.query().insertAndFetch(body);

    return res.status(201).json({ newExperience });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});

experiencesRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const experience = await Experience.query().findById(id);
    const updatedExperience = await experience.$query().patchAndFetch(body);

    return res.status(200).json({ updatedExperience });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});

experiencesRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await Experience.query().findById(id);
    await Experience.query().deleteById(id);

    return res.status(200).json({ deletedExperience: experience });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

export default experiencesRouter;
