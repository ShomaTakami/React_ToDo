import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Todo from "./components/ToDo";
import UserInput from "./components/Userinput";

function App() {
  return (
    <div className='App'>
      <div className='todo_content'>
        <Header>React Todo App</Header>
        <Todo />
        <UserInput placeholder="what's your plan?" />
      </div>
    </div>
  );
}

export default App;
