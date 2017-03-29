import React, {Component} from "react";
import {connect} from "react-redux";
import {addTodo} from "../actions";

class AddTodo extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="addtodo">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.props.dispatch(addTodo(this.refs.newtodo.value));
                    this.refs.newtodo.value = "";
                }}>
                    <input type="text" className="form-control" ref="newtodo" placeholder="Add new task"/>
                    <button className="btn btn-primary">Add new task</button>
                </form>
            </div>
        );
    }
}

export default connect()(AddTodo);