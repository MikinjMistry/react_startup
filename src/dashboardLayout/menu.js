import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Menu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/profile' >Profile</Link>
                    </li>
                    <li>
                        <Link to='/about_us' >About us</Link>
                    </li>
                    <li>
                        <Link to='/login' >Logout</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Menu;