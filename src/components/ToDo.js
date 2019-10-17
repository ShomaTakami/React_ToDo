import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        { id: 1, name: "食材を買いに行く" },
        { id: 2, name: "チャーハンを調理する" },
        { id: 3, name: "チャーハンを盛り付ける" }
      ]
    };
  }
  render() {
    return (
      <div className='list'>
        {this.state.todo.map(item => (
          <label className='container' key={item.id}>
            <input type='checkbox' />
            {item.name}
          </label>
        ))}
      </div>
    );
  }
}

export default Todo;
