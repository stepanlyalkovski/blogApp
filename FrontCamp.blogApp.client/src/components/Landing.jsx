import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <div>
              <h1>Landing page</h1>
              <div className="row">
                <div className="col s4">
                  <Link className="waves-effect waves-light btn" to={'/register'}>Sign up</Link>
                </div>
                <div className="col s4">
                  <Link className="waves-effect waves-light btn" to={'/login'}>Sign in</Link>
                </div>
              </div>
            </div>
        );
    }
}

export default Landing;