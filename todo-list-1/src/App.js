import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import uuidv4 from "uuid/v4";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  const LOCAL_STORAGE_KEY = "todoapp.todos";

  function handleAddToDo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos(prevTodos => [
      ...prevTodos,
      { id: uuidv4(), name: name, complete: false }
    ]);
    todoNameRef.current.value = null;
  }

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleClearTodos() {
    // Clear completed todos.
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedItems) {
      setTodos(storedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <br />
      <button style={{ margin: "10px 2px", backgroundColor: "#0f0", border: "none", color: 'black', padding: "5px" }} onClick={handleAddToDo}> Add To Do </button>
      <button style={{ margin: "10px 2px", backgroundColor: "#f00", border: "none", color: 'white', padding: "5px" }} onClick={handleClearTodos}> Clear Complete </button>
      <div> <span style={{ textTransform: "capitalize", color: '#696969' }}> {todos.filter(todo => !todo.complete).length} left to do</span> </div>
    </>
  );
}

export default App;
