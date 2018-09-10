import React, { Component } from "react";
import Todo from "./Todo";
import "../styles/Todo.css";
import { addTodo } from "../actions";
import { connect } from "react-redux";

class TodosList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: "",
      todos: []
    };
  }

  handleEnter = ev => {
    if (ev.key === "Enter" && ev.target.value !== "") {
      this.setState({ newTodo: "" });
      this.setState(state => ({
        todos: state.todos.concat([this.state.newTodo])
      }));
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
            {this.state.todos.map((todo, index) => {
              return <Todo todo={todo} key={index} id={index} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect()(TodosList);
