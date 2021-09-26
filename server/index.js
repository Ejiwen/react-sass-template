const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const controllers = require("./controllers");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/tasks", controllers.allTasks);

app.post("/task", controllers.addTask);

app.post("/remove", controllers.removeTask);

app.listen(3000, () =>
  console.log("SERVER IS LISTENING NOW AT PORT 3000... !!!")
);
