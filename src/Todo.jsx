import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
  }

  toggleTodo = todo => {
    console.log(todo);
    this.setState(prevState => ({
      completed: !prevState.completed
    }));
  };

  render() {
    return (
      <li
        onClick={() => this.toggleTodo(this.props.todo)}
        className={this.state.completed ? "completed" : ""}
        key={this.props.id}
      >
        {this.props.todo}
      </li>
    );
  }
}
