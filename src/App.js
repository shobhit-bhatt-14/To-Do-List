import React, { useState } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskContent, setTaskContent] = useState("");

  return (
    <div className="app">
      <TaskForm
        tasks={tasks}
        setTasks={setTasks}
        taskContent={taskContent}
        setTaskContent={setTaskContent}
      />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
