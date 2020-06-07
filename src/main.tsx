import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "app/store";
import { Router } from "react-router";
import { App } from "./app";
import "./app/components/common/fontawesome/fontawesome";
import "./style.scss";
import { history } from "app/utils";
// prepare store
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);
