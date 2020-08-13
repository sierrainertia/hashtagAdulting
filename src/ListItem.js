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
      <li onClick={this.handleClick}>
        <span className={checkBoxClassName}></span>
        {this.props.listItemText}
      </li>
    );
  }
}

export default ListItem;