import React, { useState } from 'react'
import Todo from './Todo'
import '../styles/Todo.css'
import { toggleTodo } from '../actions'
import PropTypes from 'prop-types'
import { addTodo } from '../actions'
import { connect } from 'react-redux'

const handleEnter = (ev, setNewTodo, props) => {
    if (ev.key === 'Enter' && ev.target.value !== '') {
        setNewTodo('')
        props.addTodo(ev.target.value)
    } else {
        return
    }
}

const handleChange = (ev, setNewTodo) => {
    setNewTodo(ev.target.value)
}

const CompletedTodosCount = (todos) => todos.filter((todo) => todo.completed).length || 0

const TodosList = (props) => {
    const [newTodo, setNewTodo] = useState('')
    const { todos, toggleTodo } = props
    const completed = todos && CompletedTodosCount(todos)
    return (
        <div className="todos-wrapper">
            <input
                type="text"
                className="todo-input"
                placeholder="What needs to be done?"
                value={newTodo}
                onKeyDown={(ev) => handleEnter(ev, setNewTodo, props)}
                onChange={(ev) => handleChange(ev, setNewTodo)}
                autoFocus={true}
            />
            <div className="todos-list">
                <ul>
                    {todos &&
                        todos.map((todo) => <Todo onClick={() => toggleTodo(todo.id)} todo={todo} key={todo.id} />)}
                </ul>
                <p>
                    {completed} of {todos.length} completed
                </p>
            </div>
        </div>
    )
}

TodosList.defaultProps = {
    todos: [],
}

TodosList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
}

const mapStateToProps = (state) => ({
    todos: state.todos,
})

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    addTodo: (text) => dispatch(addTodo(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
