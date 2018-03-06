import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

let PrivateRoute = ({ component: Component, isUserLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      isUserLoggedIn
      ? <Component {...props}/>
      : <Redirect to={'/'} />
  )} />
);

const mapStateToProps = state => {
  return {
    isUserLoggedIn: state.user.token !== undefined,
  };
};

PrivateRoute = connect(
  mapStateToProps
)(PrivateRoute);

export default PrivateRoute;