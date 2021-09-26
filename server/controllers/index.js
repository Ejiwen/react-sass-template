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
};
