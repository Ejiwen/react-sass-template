const bd = require("../bd");

const saveToBD = (item) => {
  const todoItem = new bd.todo({
    tach: item,
  });
  todoItem.save();
};

module.exports = {
  addTask: function (task) {
    saveToBD(task);
  },

  findAllTaks: function (callback) {
    bd.todo.find((err, tasks) => {
      if (err) {
        console.log("ERROR ...");
      } else {
        callback(null, tasks);
      }
    });
  },

  removeTask: function (id, callback) {
    bd.todo.deleteOne({ _id: id }, (err) => {
      if (err) {
        console.log("error Happened");
      } else {
        callback(null, "deleted it successfully ... !");
      }
    });
  },

  editTask: function (id, taskup, callback) {
    bd.todo.updateOne({ _id: id }, { tach: taskup }, (err) => {
      if (err) {
        console.log("error Happened");
      } else {
        callback(null, "edited it successfully ... !");
      }
    });
  },
};
