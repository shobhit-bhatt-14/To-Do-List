import React, { useState } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import "./styles/App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { taskContent: "eleplant elephant" },
    { taskContent: "monkey" },
    { taskContent: "deer" },
    { taskContent: "a" },
  ]);
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
