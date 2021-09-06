import React from "react";
import { v4 as uuidv4 } from "uuid";

import "../styles/TaskForm.css";

const TaskForm = (props) => {
  const addTask = (e) => {
    e.preventDefault();
    if (props.taskContent === "") return;
    props.setTasks([
      ...props.tasks,
      {
        id: uuidv4(),
        taskContent: props.taskContent,
      },
    ]);

    props.setTaskContent("");
  };

  const changeHandler = (e) => {
    props.setTaskContent(e.target.value);
  };

  return (
    <form className="task-form" onSubmit={addTask}>
      <textarea
        contentEditable="true"
        placeholder="Enter task ..."
        rows="1"
        value={props.taskContent}
        onChange={changeHandler}
      ></textarea>
      <button>
        <strong>&#xFF0B;</strong>&nbsp;Add
      </button>
    </form>
  );
};

export default TaskForm;
