import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export const PrivateRoute = ({component: Component, ...rest}) => {
    const user = localStorage.getItem('idToken')
        return (
            <Route {...rest} render={props => (
                user ?
                    <Component {...props} />
                : <Redirect to="/?authorized=0" />
            )} />
        );

    
};
