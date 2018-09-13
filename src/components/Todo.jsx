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
    const { todo, onClick } = this.props;
    return (
      <li
        onClick={onClick}
        className={todo.completed ? "completed" : ""}
        key={todo.id}
      >
        <div>
          <input type="checkbox" name="checkbox" />
          <label htmlFor="checkbox">{todo.text}</label>
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapDispatchToProps)(Todo);
