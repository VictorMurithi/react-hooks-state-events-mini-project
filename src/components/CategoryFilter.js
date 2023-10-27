import React from "react";

function CategoryFilter({ categories, filterTasks }) {
  return (
    <div className="categories">
      <button
        onClick={() => filterTasks("All")}
        className={"selected"}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => filterTasks(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
