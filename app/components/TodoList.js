import React, {Component} from "react";
import TodoItem from "TodoItem";
import {connect} from "react-redux";

const TodoList = props => {
    const generateTodos = () => {
        let todos = props.todos;
        if (props.searchTerm.length) {
            let regex = new RegExp("^" + props.searchTerm, "i");
            todos = todos.filter(todo => regex.test(todo.task));
        }
        return todos.map((todo, index) => {
            return <TodoItem key={index} {...todo} />
        });
    };

    return(
        <ul className="todolist">
            {generateTodos()}
        </ul>
    );
};

export default connect(
    (state) => {
        return {
            todos: state.todos,
            searchTerm: state.searchTerm
        }
    }
)(TodoList);