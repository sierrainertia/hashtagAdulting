import React, { Component, Fragment } from "react";

class ListItem extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
    };
  }

  handleClick = () => {
    if (this.state.checked === false) {
      this.setState({
        checked: true,
      });
    } else {
      this.setState({ checked: false });
    }
  };
  render() {
    let checkBoxClassName;
    if (this.state.checked) {
      checkBoxClassName = "fa fa-check-square-o";
    } else {
      checkBoxClassName = "fa fa-square-o";
    }
    return (
      <li>
        <span onClick={this.handleClick} className={checkBoxClassName}></span>
        <input
          type="checkbox"
          id={this.props.id}
          checked={this.state.checked}
          className="visuallyHidden"
          onChange={this.handleClick}
        />

        <label htmlFor={this.props.id}>{this.props.listItemText}</label>
      </li>
    );
  }
}

export default ListItem;
