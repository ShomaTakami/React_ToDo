import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Header;
