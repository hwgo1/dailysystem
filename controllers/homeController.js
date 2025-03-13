import tasks from "../data.js";

export const renderHome = (req, res) => {
  res.render("home", { tasks: tasks });
};
