import React from "react";

const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <h3 key={task._id}>{task.tach}</h3>
      ))}
    </div>
  );
};

export default Tasks;
