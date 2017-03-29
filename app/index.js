import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import TodoApp from "TodoApp";
const store = require("./store/store").configure();

require("bootstrap/dist/css/bootstrap.min.css");
require("./styles/styles.scss");


ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById("app")
);

