import React, { useState } from "react";

const Tasks = ({ tasks, deleteTask, editTask }) => {
  const [taskup, setTaskup] = useState("");
  const deleteIt = (e) => {
    var id = e.target.attributes.getNamedItem("data-id").value;
    deleteTask(id);
  };

  const EditIt = (e) => {
    var id = e.target.attributes.getNamedItem("data-id").value;
    //EditTask(id);
    let zone = document.getElementById("footer");
    zone.innerHTML = `<input type='text' id="editItem" /> <input id="saveItem" type='submit' value='save' />`;
    let input = document.getElementById("saveItem");
    input.addEventListener("click", () => {
      let val = document.getElementById("editItem").value;
      editTask(id, val);
    });

    /*
    onChange={() => setTaskup(e.target.value)}
    onClick={() => editTask(taskup)}
    */
  };

  return (
    <div>
      {tasks.map((task) => (
        <h3 key={task._id}>
          {task.tach}
          <span data-id={task._id} onClick={deleteIt}>
            X
          </span>
          <span data-id={task._id} onClick={EditIt}>
            Edit
          </span>
        </h3>
      ))}
    </div>
  );
};

export default Tasks;
