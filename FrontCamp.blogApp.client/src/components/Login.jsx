import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import { login } from '../actions';

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.refs.email.value,
      password: this.refs.password.value
    };

    this.props.login(user);
  }

    render() {
      const redirectIfLoggedIn = (
        this.props.isLoggedIn && <Redirect
          to={{
            pathname: "/blogs",
            state: { isLoggedIn: true }
          }}/>
      );

        return (
            <div>
                {redirectIfLoggedIn}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input type="text" ref="email" required/>
                    </label>
                    <label>
                        Password
                        <input type="password" ref="password" required/>
                    </label>
                    <button type="submit">Sign in</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
  const isLoggedIn= state.user.isLoggedIn;
  return {
    isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch(login(user));
    }
  }
};

Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default Login;