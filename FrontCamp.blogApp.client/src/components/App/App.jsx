import React, { Component } from 'react';
import './App.css';
import VisiblePostList from '../../containers/VisiblePostList';
import SearchBar from '../SearchBar.jsx';
import AddPostContainer from '../../containers/AddPostContainer'
import EditAuthor from '../EditAuthor.jsx';

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
    const filteredPosts = this.filterPosts(this.state.posts, this.state.filterText);

    return (
      <div>
        <nav className=" grey darken-3" role="navigation">
          <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">FrontCamp</a>
          </div>
        </nav>
        <main className="container">
          <h1 className="header center">Blog application</h1>
          <div className="row app-content">
            <div className="col s3">
              <div className="card-panel">
                <EditAuthor author ={this.state.author} onAuthorChange={this.handleAuthorChange}/>
                <SearchBar filterText={this.state.filterText} onFilterTextChange={this.onFilterTextChange} />
                <div className="row">
                  <div className="col s12">
                    Total items: {filteredPosts.length}
                  </div>
                </div>
                {!this.state.isCreateMode && <button className="waves-effect waves-light btn" onClick={this.handlePostAddClick} disabled={this.state.isPostAddBtnDisabled}>Add Post</button>}
              </div>
            </div>
            <div className="col s8 offset-s1">
              <VisiblePostList/>
              <AddPostContainer/>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
