import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import FilterablePostList from '../FilterablePostList.jsx';
import Register from '../Register.jsx';
import Login from '../Login.jsx';
import Landing from '../Landing.jsx';
import AddPost from '../AddPost.jsx';
import Post from '../Post.jsx';
import Header from '../Header.jsx';
import Logout from '../Logout.jsx';
import PrivateRoute from '../PrivateRoute.jsx';
import Spinner from '../Spinner.jsx';

class App extends Component {
  constructor() {
    super();

  }

  render() {
    const spinner = (this.props.fetching && <Spinner/>);

    return (
      <div>
        <Router>
          <div>
            <Header user={this.props.user}/>
            <main className="container">
              <h1 className="header center">Blog application</h1>
              {spinner}
            <div className="row app-content">
              <Switch>
                <Route exact path="/" component={Landing}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/logout" component={Logout}/>
                <PrivateRoute exact path="/blogs" component={FilterablePostList}/>
                <PrivateRoute path="/blogs/0" component={AddPost}/>
                <PrivateRoute path="/blogs/:id" component={Post}/>
              </Switch>
            </div>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    fetching: state.fetch
  };
};

App = connect(
  mapStateToProps
)(App);

export default App;
