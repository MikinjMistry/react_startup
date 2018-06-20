import React, { Component } from 'react';


class LoginLayout extends Component {
    render() {
        const { children, ready } = this.props
        console.log("props:",this.props);
        console.log("children:",children);
        console.log("ready:", ready);
        return (
            <div className="page page-login">
                <div className="main">{children}</div>
            </div>
        );
    }
}

export default LoginLayout;