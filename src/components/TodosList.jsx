import React, { Component } from "react";
import Todo from "./Todo";
import "../styles/Todo.css";
import { toggleTodo } from "../actions";
import PropTypes from "prop-types";
import { addTodo } from "../actions";
import { connect } from "react-redux";

class TodosList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: ""
    };
  }

  handleEnter = ev => {
    if (ev.key === "Enter" && ev.target.value !== "") {
      this.setState({ newTodo: "" });
      this.props.addTodo(ev.target.value);
    } else {
      return;
    }
  };

  handleChange = ev => {
    this.setState({
      newTodo: ev.target.value
    });
  };

  render() {
    const { todos, toggleTodo } = this.props;

    return (
      <div className="todos-wrapper">
        <input
          type="text"
          className="todo-input"
          placeholder="What needs to be done?"
          value={this.state.newTodo}
          onKeyDown={this.handleEnter}
          onChange={this.handleChange}
          autoFocus={true}
        />
        <div className="todos-list">
          <ul>
            {todos &&
              todos.map(todo => (
                <Todo
                  onClick={() => toggleTodo(todo.id)}
                  todo={todo}
                  key={todo.id}
                />
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

TodosList.defaultProps = {
  todos: []
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  addTodo: text => dispatch(addTodo(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList);
