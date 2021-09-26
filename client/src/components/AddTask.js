import React, { useEffect, useState } from "react";
import axios from "axios";

const AddTask = ({ saveTask }) => {
  const [task, setTask] = useState("");

  const sendTask = (e) => {
    e.preventDefault();
    saveTask(task);
  };

  return (
    <form className="new-task" onSubmit={sendTask}>
      <input
        className="new-task__name"
        type="text"
        name="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input className="new-task__send" type="submit" value="ADD" />
    </form>
  );
};

export default AddTask;
