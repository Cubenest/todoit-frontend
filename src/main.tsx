import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { App } from "./app";
import "./app/components/common/fontawesome/fontawesome";
import "./style.scss";
import { history } from "app/utils";

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById("root")
);
