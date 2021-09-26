const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todolist", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database is connected ... ");
});

const task = new mongoose.Schema({
  tach: String,
});

const Task = mongoose.model("todo", task);

module.exports = {
  todo: Task,
};
