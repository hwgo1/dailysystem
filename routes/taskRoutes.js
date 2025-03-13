import { Router } from "express";
import { addTask, renderTasksForm } from "../controllers/taskController.js";
const taskRouter = Router();

taskRouter.get("/tasks", renderTasksForm);
taskRouter.post("/newTask", addTask);

export default taskRouter;
