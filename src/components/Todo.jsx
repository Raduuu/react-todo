import React, { Component } from "react";
import { toggleTodo } from "../actions";
import { connect } from "react-redux";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
  }

  render() {
    const { todo, onClick, completedTodo } = this.props;
    console.log(completedTodo);
    return (
      <li
        onClick={onClick}
        className={todo.completed ? "completed" : ""}
        key={todo.id}
      >
        {todo.text}
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapDispatchToProps)(Todo);
