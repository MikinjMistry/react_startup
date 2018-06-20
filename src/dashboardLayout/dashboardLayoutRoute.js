import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import DashboardLayout from './dashboardLayout';

class DashboardLayoutRoute extends Component {
    render() {
        const { component: Component,children, ...rest } = this.props
        console.log(this.props)
        return (
            <Route {...rest} render={matchProps => (
                <DashboardLayout>
                    <Component {...matchProps} />
                </DashboardLayout>
            )} />
        );
    }
}
export default DashboardLayoutRoute;