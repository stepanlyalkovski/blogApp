import React, { Component } from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
  const isUserLoggedIn = props.user.token !== undefined;
  const logoutLink = (isUserLoggedIn && <li><Link to={'/logout'}>Log out</Link></li>);
  const greeting = (isUserLoggedIn && <li style={{marginRight: '15px'}}>Welcome, {props.user.author}</li>);
  return (
    <nav className=" grey darken-3" role="navigation">
      <div className="nav-wrapper container">
        <Link id="logo-container" className="brand-logo" to={'/'}>FrontCamp</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {greeting}
          <li><Link to={'/blogs'}>Blogs</Link></li>
          {logoutLink}
        </ul>
      </div>
    </nav>)
};

export default Header;