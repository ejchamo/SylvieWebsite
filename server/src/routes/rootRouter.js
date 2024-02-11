import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import imagesRouter from "./api/v1/imagesRouter.js";
import experiencesRouter from "./api/v1/experiencesRouter.js";
import clientRouter from "./clientRouter.js";
import emailRouter from "./api/v1/emailRouter.js";
import aboutRouter from "./api/v1/aboutRouter.js";

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/experiences", experiencesRouter);
rootRouter.use("/api/v1/images", imagesRouter);
rootRouter.use("/api/v1/email", emailRouter);
rootRouter.use("/api/v1/about", aboutRouter);

//place your server-side routes here

export default rootRouter;
