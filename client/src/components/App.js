import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./layouts/Layout";
import AddTask from "./AddTask.js";

const App = () => {
  useEffect(() => {
    axios.get("/tasks").then((res) => console.log(res.data));
  }, []);

  const saveTask = (task) => {
    axios.post("/task", {
      task: task,
    });
  };

  return (
    <Layout>
      <AddTask saveTask={saveTask} />
    </Layout>
  );
};

export default App;
