import React, { Component } from "react"; // eslint-disable-next-line
import logo from "./logo.svg";
import TodosWrapper from "./TodosWrapper";
import Todo from "./Todo.jsx";
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
        this.handleEnter = this.handleEnter.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleEnter = ev => {
        if (ev.key === "Enter") {
            this.setState({ newTodo: "" });
            this.setState(state => ({
                todos: state.todos.concat([this.state.newTodo])
            }));
        } else {
            return;
        }
    };

    handleChange = ev => {
        this.setState({
            newTodo: ev.target.value
        });
    };

    toggleTodo = () => {};

    render() {
        return (
            <div className="App">
                <div className="todoApp">
                    <div className="todo-title"> todos </div>
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
                        <div className="todos-wrapper">
                            <ul>
                                {this.state.todos.map((todo, index) => {
                                    return (
                                        <Todo
                                            todo={todo}
                                            key={index}
                                            id={index}
                                        />
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
