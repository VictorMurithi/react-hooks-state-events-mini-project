import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("All");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTask = {
      text,
      category,
    };
    onTaskFormSubmit(newTask);
    setText("");
    setCategory("All");
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="New task"
        />
      </label>
      <label>
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
