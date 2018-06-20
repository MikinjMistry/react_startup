import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginLayoutRoute from './loginLayout/loginLayoutRoute';
import DashboardLayoutRoute from './dashboardLayout/dashboardLayoutRoute';
import Login from './views/login';
import Register from './views/register';
import Home from './views/home';
import AboutUs from './views/about-us';
import Profile from './views/profile';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <LoginLayoutRoute path="/login" component={Login} />
          <LoginLayoutRoute path="/register" component={Register} />
          <DashboardLayoutRoute path="/home" component={Home}></DashboardLayoutRoute>
          <DashboardLayoutRoute path="/about_us" component={AboutUs}></DashboardLayoutRoute>
          <DashboardLayoutRoute path="/profile" component={Profile}></DashboardLayoutRoute>
        </Switch>
      </Router>
    );
  }
}

export default App;
