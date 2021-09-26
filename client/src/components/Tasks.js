import React from "react";

const Tasks = ({ tasks, deleteTask }) => {
  const deleteIt = (e) => {
    var id = e.target.attributes.getNamedItem("data-id").value;
    deleteTask(id);
  };

  return (
    <div>
      {tasks.map((task) => (
        <h3 key={task._id}>
          {task.tach}{" "}
          <span data-id={task._id} onClick={deleteIt}>
            X
          </span>{" "}
        </h3>
      ))}
    </div>
  );
};

export default Tasks;
