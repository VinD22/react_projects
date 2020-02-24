import React from "react";

function Todo({ todo, toggleTodo }) {
  function handleSelectedOnChange(e) {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleSelectedOnChange}
        ></input>
        {todo.name}
      </label>
    </div>
  );
}

export default Todo;
