import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import LoginLayout from './loginLayout';

class LoginLayoutRoute extends Component {
    render() {
        const { component: Component, children, ...rest } = this.props
        return (
            <Route {...rest} render={matchProps => (
                <LoginLayout>
                    <Component {...matchProps} />
                </LoginLayout>
            )} />
        );
    }
}
export default LoginLayoutRoute;