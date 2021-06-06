import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = connect((state) => ({
  isLoggedIn: state.auth.isLoggedIn,
}))(({
  component: RouteComponent,
  isLoggedIn,
  ...rest
}) => (
  <Route
    {...rest}
    render={routeProps =>
      isLoggedIn ? (
        <RouteComponent {...routeProps} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
));

export default PrivateRoute;
