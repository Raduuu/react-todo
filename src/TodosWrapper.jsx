import React, { Component } from "react";
import Todo from "./Todo.jsx";
import "./styles/Todo.css";

export default class TodosWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };
    }

    render() {
        return (
            // <div className="Todos-wrapper">
            //     <ul>
            //         {this.state.todos.map(todo => {
            //             return <li> {todo} </li>;
            //         })}
            //     </ul>
            // </div>
            <div className="todos-wrapper">
                <ul>
                    {this.state.todos.map((todo, index) => {
                        return <Todo todo={todo} key={index} id={index} />;
                    })}
                </ul>
            </div>
        );
    }
}
