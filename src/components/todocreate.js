import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./todocreate.css";

class ToDoCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newtodo: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      newtodo: e.target.value
    });
  }

  handleSubmit(e) {
    let newtodo = this.state.newtodo;
    if (newtodo !== "" && window.confirm("Do u really wanna add this?")) {
      this.props.onClick(newtodo);
      this.setState({ newtodo: "" });
    }
    e.preventDefault();
  }
  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.newtodo).focus();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='form_box'>
        <input
          type='text'
          value={this.state.newtodo}
          onChange={this.handleChange}
          ref='newtodo'
        />
        <button>ADD</button>
      </form>
    );
  }
}

export default ToDoCreate;
