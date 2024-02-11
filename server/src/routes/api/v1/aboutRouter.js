import express from "express";
import { About } from "../../../models/index.js";

const aboutRouter = new express.Router();

aboutRouter.get("/", async (req, res) => {
  try {
    const about = await About.query();
    return res.status(200).json({ about });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

aboutRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const about = await About.query().findById(id);
    const { details } = req.body;
    const updatedAbout = await about.$query().patchAndFetch({ details });
    return res.status(200).json({ about: updatedAbout });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

export default aboutRouter;
