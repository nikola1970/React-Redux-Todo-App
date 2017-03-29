import React, {Component} from "react";
import {connect} from "react-redux";
import {removeTodo} from "../actions";

const TodoItem = props => {
    return (
        <li>{props.task} <span className="glyphicon glyphicon-remove" onClick={() => props.dispatch(removeTodo(props.id))}/></li>
    );
};

export default connect()(TodoItem);

