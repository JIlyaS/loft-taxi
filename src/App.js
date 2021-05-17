import React from 'react';
import {connect} from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MapPage from './pages/MapPage';
import ProfilePage from './pages/ProfilePage';
import PageNotFound from './pages/PageNotFound';
import PrivateRoute from './utils/PrivateRoute';

import './App.css';

const App = ({isLoggedIn}) => {
  return (
    <div className="app">
      <Switch>
        <PrivateRoute path="/" component={MapPage} exact />
        <PrivateRoute path="/profile" component={ProfilePage} />
        {/* <Route path="/login" component={LoginPage} /> */}
        {/* <Route path="/register" component={RegisterPage} /> */}
        <Route path="/login">
          {isLoggedIn ? <Redirect to="/" /> : <LoginPage />}
        </Route>
        <Route path="/register">
          {
            isLoggedIn ? <Redirect to="/" /> : <RegisterPage />
          }
        </Route>
        <Route path="*" component={PageNotFound} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({auth}) => {
  return {
    isLoggedIn: auth.isLoggedIn,
  }
}

export default connect(mapStateToProps)(App);
