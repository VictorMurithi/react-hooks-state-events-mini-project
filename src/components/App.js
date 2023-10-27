import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addNewTask = (newTask) => {
    const updatedTasks = [...tasks];
    updatedTasks.push({
      id: tasks.length + 1,
      ...newTask,
    });
    setTasks(updatedTasks);
  };
  
  const filterTasks = (category) => {
    setSelectedCategory(category);
  };
  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterTasks={filterTasks} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addNewTask} tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={filteredTasks} selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
