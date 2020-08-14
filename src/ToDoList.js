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
    if (this.state.userInput === "") {
      alert(
        "Please type something! We know there are plenty of tasks you have been avoiding 👀"
      );
    } else {
      const dbRef = this.state.list;
      dbRef.push(this.state.userInput);

      // Set state to with new list value(s)
      this.setState({
        userInput: "",
      });
    }
  };

  // add clear list functionality
  removeListItems = (event) => {
    this.setState({ list: [] });
  };

  render() {
    return (
      <section className={`toDoList ${this.props.className}`}>
        <h2>{this.props.listHeader}</h2>
        {/* // create form for user to add tasks // use .addItem method to add item
        to list on submit */}
        <form onSubmit={this.addItem}>
          <label
            htmlFor={this.props.inputId}
            className="visuallyhidden"
          ></label>

          <input
            id={this.props.inputId}
            type="text"
            placeholder={this.props.placeHolder}
            aria-label={this.props.placeHolder}
            value={this.state.userInput}
            onChange={this.handleChange}
            required
          ></input>

          <button className="mainButton" onClick={this.handleClick}>
            Add Task!
          </button>
        </form>
        <ul>
          {/* maping through state to render list items */}
          {this.state.list.map((listItem, index) => {
            return (
              <ListItem
                id={listItem + index}
                key={index}
                listItemText={listItem}
              />
            );
          })}
        </ul>
        <div>
          <button className="clear" onClick={this.removeListItems}>
            clear list
          </button>
        </div>
      </section>
    );
  }
}

export default ToDoList;
