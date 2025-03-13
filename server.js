import express from "express";
import allRoutes from "./routes/index.js";

const app = express();
const PORT = 3000;

app.set("view engine", "pug");
app.set("views", "views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(allRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}! 🚀`);
});
