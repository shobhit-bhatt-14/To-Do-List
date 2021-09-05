import React from "react";
import { v4 as uuidv4 } from "uuid";

const TaskForm = (props) => {
  const addTask = (e) => {
    e.preventDefault();
    if (props.taskContent === "") return;
    props.setTasks([
      ...props.tasks,
      {
        id: uuidv4(),
        taskContent: props.taskContent,
        isDone: false,
      },
    ]);

    props.setTaskContent("");
  };

  const changeHandler = (e) => {
    props.setTaskContent(e.target.value);
  };

  return (
    <form className="task-form" onSubmit={addTask}>
      <textarea value={props.taskContent} onChange={changeHandler}></textarea>
      <button>Add Task</button>
    </form>
  );
};

export default TaskForm;
