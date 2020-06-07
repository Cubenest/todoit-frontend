import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import { Home } from "app/containers/Home";

import { hot } from "react-hot-loader";
import { PrivateRoute } from "./components/privateroute";
import { LoginPage } from "./containers/Login";

export const App = hot(module)(() => (
    <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/login/:token?" component={LoginPage} />
    </Switch>
));
