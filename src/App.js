import React, { Component } from "react"; // eslint-disable-next-line
import logo from "./logo.svg";
import TodosList from "./components/TodosList";
import "./App.css";
import "./styles/Todo.css";

class App extends Component {
  constructor(props) {
    super(props);

    // set of the app with an array of todos and the value of the new todo
    this.state = {
      newTodo: "",
      todos: []
    };
  }

  render() {
    return (
      <div className="App">
        <div className="todoApp">
          <div className="todo-title"> todos </div>
          <TodosList />
        </div>
      </div>
    );
  }
}

export default App;
