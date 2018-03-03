import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import VisiblePostList from '../../containers/VisiblePostList';
import SearchBar from '../SearchBar.jsx';
import AddPostContainer from '../../containers/AddPostContainer'
import EditAuthor from '../EditAuthor.jsx';
import SearchablePostList from '../FilterablePostList.jsx';
import Register from '../Register.jsx';
import Login from '../Login.jsx';
import Landing from '../Landing.jsx';


class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      author: 'John',
      filterText: '',
      isCreateMode: false,
      isPostAddBtnDisabled: false
    };

    this.onPostDelete = this.onPostDelete.bind(this);
    this.onFilterTextChange = this.onFilterTextChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
  }

  onPostDelete(postId) {
    const updatedPosts = this.state.posts.filter(p => p.id !== postId);
    this.setState({posts: updatedPosts});
  }

  onFilterTextChange(filterText) {
    this.setState({ filterText: filterText });
  }

  filterPosts(posts, filterText) {
    if (!filterText) {
      return posts;
    }

    return posts.filter(p => p.author === filterText);
  }

  handleAuthorChange(author) {
    const isPostAddBtnDisabled = author == null || author === '';
    this.setState({author: author, isPostAddBtnDisabled: isPostAddBtnDisabled});
  }

  render() {
    return (
      <div>
        <nav className=" grey darken-3" role="navigation">
          <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">FrontCamp</a>
          </div>
        </nav>
        <main className="container">
          <h1 className="header center">Blog application</h1>
          <div className="row app-content">
            <Router>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/register" component={Register}/>
              <Route path="/login" component={Login}/>
              <Route path="/blogs" component={SearchablePostList}/>
            </Switch>                                                
            </Router>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
