import React from "react";

class UserInput extends React.Component {
  handleChange = props => {
    console.log(props.text);
  };
  // handleSubmit = props => {
  //   alert();
  // };
  render() {
    return (
      <div className='userInput'>
        <input
          type='text'
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
        <button onSubmit={this.handleSubmit}>ADD</button>
      </div>
    );
  }
}

export default UserInput;
