import React, {Component} from "react";

import Search from "Search";
import TodoList from "TodoList";
import AddTodo from "AddTodo";

class TodoApp extends Component {
    render(){
        return (
            <div className="todoapp">
                <h1>Todo List</h1>
                <Search />
                <TodoList />
                <AddTodo />
            </div>
        );
    }
}

export default TodoApp;
