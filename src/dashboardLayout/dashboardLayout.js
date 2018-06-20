import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Menu from './menu';
class DashboardLayout extends Component {
    render() {
        console.log('DashboardLayout');
        const { children, ready } = this.props
        return (
            <div className="page page-dashboard">
                <Header />
                <Menu />
                <div className="main">{children}</div>
                <Footer />
            </div>
        );
    }
}

export default DashboardLayout;