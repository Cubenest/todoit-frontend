import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { configureStore } from "app/store";
import { Router } from "react-router";
import { App } from "./app";
import "./app/components/common/fontawesome/fontawesome";
import "./style.scss";
// prepare store
const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);
