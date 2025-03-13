import tasks from "../data.js";
import { Task } from "../models/taskModel.js";

export const renderTasksForm = (req, res) => {
  res.render("tasks");
};

export const addTask = (req, res, next) => {
  const { name, exp, difficulty, deadline } = req.body;

  // Verificar se os dados essenciais estão presentes
  if (!name) {
    console.error("Nome da tarefa não fornecido!");
    return res.redirect("/tasks");
  }

  // Criar a nova tarefa com os dados validados
  const newTask = new Task(name, exp, difficulty, deadline);

  // Adicionar a tarefa ao array
  newTask.save();

  // Log para depuração
  console.log("Nova tarefa adicionada:", newTask);

  // Redirecionar para a página inicial
  res.redirect("/");
};
