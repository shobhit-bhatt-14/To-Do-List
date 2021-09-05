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
      },
    ]);

    props.setTaskContent("");
  };

  const changeHandler = (e) => {
    props.setTaskContent(e.target.value);
  };

  return (
    <form onSubmit={addTask}>
      <textarea onChange={changeHandler}></textarea>
      <button>Add Task</button>
    </form>
  );
};

export default TaskForm;
