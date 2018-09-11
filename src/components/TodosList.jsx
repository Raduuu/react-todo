import React, { Component } from "react";
import Todo from "./Todo";
import "../styles/Todo.css";
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
      // this.setState(state => ({
      //   todos: state.todos.concat([this.state.newTodo])
      // }));
      this.props.dispatch(addTodo(ev.target.value));
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
    const { todos } = this.props;
    console.log(todos);

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
            {todos.map((todo, index) => {
              return <Todo todo={todo} key={todo.id} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

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

export default connect(mapStateToProps)(TodosList);
