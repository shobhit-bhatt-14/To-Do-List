import React from "react";
import { useState } from "react/cjs/react.development";

import "../styles/Task.css";

const Task = (props) => {
  const [done, setDone] = useState(false);
  let taskContentClass = done ? "task-done" : "task-content";
  let taskActivity = done ? "task task-activity" : "task";

  const taskToggle = () => {
    setDone(!done);
  };

  const deleteTask = () => {
    props.setTasks(props.tasks.filter((t) => t.id !== props.task.id));
  };

  return (
    <div className={taskActivity}>
      <p className={taskContentClass}>{props.task.taskContent}</p>
      <button onClick={taskToggle}>
        <strong>&#10004;</strong>&nbsp; Done
      </button>
      <button onClick={deleteTask}>
        <strong>&#x2718;</strong>&nbsp; Delete
      </button>
    </div>
  );
};

export default Task;
