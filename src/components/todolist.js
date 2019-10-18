import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import "./todolist.css";

class ToDoList extends Component {
  render() {
    let data = this.props.data;

    if (data.length === 0) {
      return <div className='todozero'>Nothing ToDo</div>;
    } else {
      return (
        <ul className='todolist'>
          {data.map(i => (
            <ToDoItem key={i.id} item={i} remove={this.props.remove} />
          ))}
        </ul>
      );
    }
  }
}

export default ToDoList;
