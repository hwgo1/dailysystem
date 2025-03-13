import tasks from "../data.js";

export class Task {
  constructor(name, exp, difficulty, deadline) {
    this.name = name || "Tarefa Sem Nome";
    this.exp = exp || 50;
    this.difficulty = difficulty || "D";
    this.deadline = deadline || null;
    this.completed = false;
  }

  complete() {
    this.completed = true;
  }

  save() {
    tasks.push(this);
  }

  findAll() {
    return tasks;
  }
}
