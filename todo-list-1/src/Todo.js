import React from "react";

function Todo({ todo, toggleTodo }) {
  function handleSelectedOnChange(e) {
    toggleTodo(todo.id);
  }

  return (
    <div style={{ padding: '5px', margin: "3px 0px" }}>
      <label >
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleSelectedOnChange}
        ></input>
        <span style={{ textTransform: "capitalize", color: '#696969' }}>{todo.name}</span>
      </label>
    </div>
  );
}

export default Todo;
