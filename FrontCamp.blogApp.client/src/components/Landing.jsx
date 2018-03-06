import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <div>
              <div className="row">
                <div className="col s8 offset-s4">
                  <div className="row">
                    <div className="col s4">
                      <Link className="waves-effect waves-light btn btn-large" to={'/register'}>Sign up</Link>
                    </div>
                    <div className="col s4">
                      <Link className="waves-effect waves-light btn btn-large" to={'/login'}>Sign in</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Landing;