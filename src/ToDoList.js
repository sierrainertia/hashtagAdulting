import React, { Component, Fragment } from "react";

class ToDoList extends Component {
  // use constructor to define state and create empty array list
  constructor() {
    super();
    this.state = {
      list: [],
      userInput: "",
    };
  }

  handleChange = (event) => {
    // update state to contain what user types
    this.setState({
      // putting users input in userInput .target defines where the information is coming from
      userInput: event.target.value,
    });
  };

  // Create addItem function to add item to list
  handleClick = (event) => {
    //prevent page from refreshing
    event.preventDefault();

    const dbRef = this.state.list;
    dbRef.push(this.state.userInput);

    // Set state to with new list value(s)
    this.setState({
      userInput: "",
    });
  };

  render() {
    return (
      <Fragment>
        {/* // create form for user to add tasks // use .addItem method to add item
        to list on submit */}
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Type in an errand"
            aria-label="Type in an errand"
            value={this.state.userInput}
            onChange={this.handleChange}
          ></input>
          <button onClick={this.handleClick}>Add Task!</button>
        </form>
        <ul>
          {/* maping through state to render list items */}
          {this.state.list.map((listItem, index) => {
            return (
              <li key={index}>
                <span class="fa fa-square-o"></span>
                {listItem}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default ToDoList;
