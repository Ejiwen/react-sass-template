import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./layouts/Layout";
import AddTask from "./AddTask.js";
import Tasks from "./Tasks.js";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, [tasks]);

  const saveTask = (task) => {
    axios.post("/task", {
      task: task,
    });
    getTasks();
  };

  const deleteTask = (taskId) => {
    axios.post("/remove", { id: taskId }).then((res) => console.log(res.data));
  };

  const getTasks = () => {
    axios.get("/tasks").then((res) => setTasks(res.data));
  };

  return (
    <Layout>
      <AddTask saveTask={saveTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </Layout>
  );
};

export default App;
