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

export default aboutRouter;
