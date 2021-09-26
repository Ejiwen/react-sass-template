import React, { useEffect, useState } from "react";
import axios from "axios";

const AddTask = () => {
  const [task, setTask] = useState("");

  useEffcet(() => {
    axios.post("/task", { task: "test" });
  });

  return (
    <form className="new-task">
      <input className="new-task__name" type="text" name="task" />
      <input className="new-task__send" type="button" value="ADD" />
    </form>
  );
};

export default AddTask;
