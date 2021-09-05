import React from "react";

const Task = (props) => {
  const taskDone = () => {};

  const deleteTask = () => {};

  return (
    <div>
      <p>Task content</p>
      <button onClick={taskDone}>Done</button>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default Task;
