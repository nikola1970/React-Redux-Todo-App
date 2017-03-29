import {createStore, combineReducers, compose} from "redux";
import {searchTermReducer, todoReducer} from "../reducers";

export let configure = () => {
    let reducer = combineReducers({
        searchTerm: searchTermReducer,
        todos: todoReducer
    });

    return createStore(reducer, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
};