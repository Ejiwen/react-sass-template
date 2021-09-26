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
};
