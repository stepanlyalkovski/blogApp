import React, { Component } from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
  const logoutLink = (props.isUserLoggedIn && <li><Link to={'/logout'}>Log out</Link></li>);

  return (
    <nav className=" grey darken-3" role="navigation">
      <div className="nav-wrapper container">
        <Link id="logo-container" className="brand-logo" to={'/'}>FrontCamp</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to={'/blogs'}>Blogs</Link></li>
          {logoutLink}
        </ul>
      </div>
    </nav>)
};

export default Header;