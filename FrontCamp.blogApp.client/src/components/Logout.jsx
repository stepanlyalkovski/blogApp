import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from '../actions'

let Logout = (props) => {
  props.logout();
  return (<Redirect to={'/'}/>);
};

const mapDispatchToProps = dispatch => {
  return {logout: () => dispatch(logout())};
};

Logout = connect(
  null,
  mapDispatchToProps
)(Logout);

export default Logout;