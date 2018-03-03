import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <div>
                <Link to={'/register'}>Sign up</Link>
                <br/>
                <Link to={'/login'}>Sign in</Link>
            </div>
        );
    }
}

export default Landing;