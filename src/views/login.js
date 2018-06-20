import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Login extends Component {
    render() {
        return (
            <div>
                Login works
                <br />
                <Link to='/home' >Login</Link>
                <br />
                <Link to='/register' >Register</Link>
            </div>
        );
    }
}

export default Login;