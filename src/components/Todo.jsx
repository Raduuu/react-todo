import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
  }

  toggleTodo = todo => {
    this.setState(prevState => ({
      completed: !prevState.completed
    }));
  };

  render() {
    const { todo } = this.props;
    console.log(todo);
    return (
      <li
        onClick={() => this.toggleTodo(todo)}
        className={this.state.completed ? "completed" : ""}
        key={todo.id}
      >
        {todo.text}
      </li>
    );
  }
}
