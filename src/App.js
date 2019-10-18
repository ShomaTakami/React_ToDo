import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Todo from "./components/ToDo";

function App() {
  return (
    <div className='App'>
      <div className='todo_content'>
        <Header>React Todo App</Header>
        <Todo />
      </div>
    </div>
  );
}

export default App;
