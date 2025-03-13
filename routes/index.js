import express from "express";
import taskRouter from "./taskRoutes.js";
import homeRouter from "./homeRoutes.js";

const router = express.Router();

router.use(taskRouter);
router.use(homeRouter);

export default router;
