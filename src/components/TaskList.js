import React from "react";

import Task from "./Task";
import "../styles/TaskList.css";

const TaskList = (props) => {
  return (
    <div className="task-list">
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          tasks={props.tasks}
          setTasks={props.setTasks}
          task={task}
        />
      ))}
    </div>
  );
};

export default TaskList;
