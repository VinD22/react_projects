import React from 'react';
import './App.css';
import Tasklist from "./TaskList";
import TaskForm from "./TaskForm";
import Header from "./Header";

import TaskListContextProvider from "../context/TaskListContext";

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <Tasklist />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App; 
