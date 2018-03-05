import React, { Component } from 'react';
import PostPreview from "./PostPreview.jsx";
import { Link } from "react-router-dom";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.handlePostDelete = this.handlePostDelete.bind(this);
    this.loadTest = this.loadTest.bind(this);
  }

  componentDidMount() {
    if(this.props.posts.length <= 1) {
      this.props.getPosts(this.props.token);
    }
  }

  handlePostDelete(postId) {
    this.props.onPostDelete(postId);
  }

  loadTest() {
    this.props.getPosts(this.props.token); 
  }

  getPostItem(post) {
    return (
      <div className="col s8 offset-s1 post-item" key={post._id}>
        <PostPreview post={post} />
        <div className="post-action">
          <Link to={`/blogs/${post._id}`} className="waves-effect waves-light btn green lighten-1">Show more</Link>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="row">
        <button onClick={this.loadTest}>Load</button>
        <div className="col s12">
          {this.props.posts.map(p => this.getPostItem(p))}
        </div>
      </div>
    );
  }
}


export default PostList;