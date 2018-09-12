import React, { Component } from "react";
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
  }

  render() {
    const { todo, onClick } = this.props;
    console.log(this.props);
    return (
      <li
        onClick={onClick}
        className={this.state.completed ? "completed" : ""}
        key={todo.id}
      >
        {todo.text}
      </li>
    );
  }
}
