import React, { Component } from "react";
import ListItem from "./ListItem";

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
      <section className={`toDoList ${this.props.className}`}>
        <h2>{this.props.listHeader}</h2>
        {/* // create form for user to add tasks // use .addItem method to add item
        to list on submit */}
        <form onSubmit={this.addItem}>
          <label for={this.props.inputId} className="visuallyhidden"></label>
          <input
            id={this.props.inputId}
            type="text"
            placeholder={this.props.placeHolder}
            aria-label={this.props.placeHolder}
            value={this.state.userInput}
            onChange={this.handleChange}
          ></input>
          <button onClick={this.handleClick}>Add Task!</button>
        </form>
        <ul>
          {/* maping through state to render list items */}
          {this.state.list.map((listItem, index) => {
            return <ListItem key={index} listItemText={listItem} />;
          })}
        </ul>
      </section>
    );
  }
}

export default ToDoList;
