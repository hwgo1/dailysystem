import { Router } from "express";
import { renderHome } from "../controllers/homeController.js";

const homeRouter = Router();
homeRouter.get("/", renderHome);

export default homeRouter;
