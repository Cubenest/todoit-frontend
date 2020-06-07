import React from "react";
import { Route, Redirect } from "react-router";

import AuthService from "../../services/auth.service";

export const PrivateRoute = (props: any) => {
    const { component: Component, ...rest } = props;
    return (
        <Route
            {...rest}
            render={(props) => {
                const currentUser = AuthService.getCurrentUser();
                if (!currentUser) {
                    // not logged in so redirect to login page with the return url
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location },
                            }}
                        />
                    );
                }

                // authorised so return component
                return <Component {...props} />;
            }}
        />
    );
};
