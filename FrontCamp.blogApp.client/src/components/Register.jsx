import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/index';
import { Redirect } from "react-router-dom";

class Register extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault();
      let user = {
        author: this.refs.author.value,
        email: this.refs.email.value,
        password: this.refs.password.value
      };

      this.props.registerUser(user);
    }

    render() {
      const redirectIfRegistered = (
          this.props.isRegistered && <Redirect
            to={{
              pathname: "/",
              state: { isRegistered: true }
            }}/>
        );

        return (
            <div className="row">
              <div className="col s5 push-s3">
                {redirectIfRegistered}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Author Name
                        <input type="text" ref="author" required/>
                    </label>
                    <label>
                        Email
                        <input type="text" ref="email" required/>
                    </label>
                    <label>
                        Password
                        <input type="password" ref="password" required/>
                    </label>
                    <button type="submit" className="waves-effect waves-light btn green lighten-1">Register</button>
                </form>
              </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  const isRegistered= state.user.isRegistered;
  return {
    isRegistered
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (user) => {
      dispatch(register(user));
    }
  }
};

Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);


export default Register;