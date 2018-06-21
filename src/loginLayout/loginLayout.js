import React, { Component } from 'react';


class LoginLayout extends Component {
    render() {
        const { children, ready } = this.props
        return (
            <div className="page page-login">
                <div className="main">{children}</div>
            </div>
        );
    }
}

export default LoginLayout;