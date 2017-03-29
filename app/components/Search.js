import React, {Component} from "react";
import {connect} from "react-redux";
import {setSearchTerm} from "../actions";

class Search extends Component {

    constructor(props) {
        super(props);
        this.searchTodos = this.searchTodos.bind(this);
    }

    searchTodos() {

    }

    render() {
        return (
            <div className="search">
                <input type="text" ref="search" value={this.props.searchTerm} onChange={() => {
                    this.props.dispatch(setSearchTerm(this.refs.search.value));
                }} className="form-control" placeholder="Search todos"/>
            </div>
        );
    }
}

export default connect((state) => {
        return {
            searchTerm: state.searchTerm
        };
    }
)(Search);