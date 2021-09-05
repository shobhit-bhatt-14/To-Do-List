import React from "react";

import "../styles/Task.css";

const Task = (props) => {
  const taskToggle = () => {
    props.tasks.map((t) => {
      if (t.id === props.task.id) {
        document.querySelector(".task-content").classList.toggle("task-done");
      }
    });
  };

  const deleteTask = () => {
    props.setTasks(props.tasks.filter((t) => t.id !== props.task.id));
  };

  return (
    <div className="task">
      <p className="task-content">{props.task.taskContent}</p>
      <button onClick={taskToggle}>Done</button>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default Task;
