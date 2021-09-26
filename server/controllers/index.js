const models = require("../models");

module.exports = {
  addTask: function (req, res) {
    const { task } = req.body;
    models.addTask(task);
  },

  allTasks: function (req, res) {
    models.findAllTaks((err, data) => {
      if (err) {
        console.log("error hapened ...");
      } else {
        res.send(data);
      }
    });
  },

  removeTask: function (req, res) {
    const { id } = req.body;
    models.removeTask(id, (err, msg) => {
      if (err) {
        console.log("something wrong happen ...");
      } else {
        res.send(msg);
      }
    });
  },
};
