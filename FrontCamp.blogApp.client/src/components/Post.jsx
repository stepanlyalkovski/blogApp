import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost} from '../actions';
import { Redirect } from "react-router-dom";

class Post extends Component {
  constructor(props, t) {
    super(props);
    this.id = this.props.match.params.id;
    this.initialPostCount = this.props.postCount;

    this.handleDeletePost = this.handleDeletePost.bind(this);
  }

  handleDeletePost() {
    this.props.deletePost(this.props.post._id, this.props.token);
  }

  render() {
    const post = this.props.post;
    const isPostDeleted = this.initialPostCount !== this.props.postCount;
    const redirectIfDeleted = (isPostDeleted && <Redirect to={{pathname: "/blogs"}}/>);
    const postArticle = ( !isPostDeleted &&
      <article className="card grey lighten-5 z-depth-3 post">
      <div className="card-content">
        <header>
          <h1 className="card-title" style={{textAlign: 'center'}}>{post.title}</h1>
          <p className="post-date">Posted at <time dateTime={post.date}>{post.localDate}</time></p>
        </header>
        <p className="card-content">{post.text}</p>
        <div className="post-tag-list">
          {post.tags.map(tag => <span key={tag} className='chip'>{tag}</span>)}
        </div>
        <footer>
          Author: {post.author}
        </footer>
      </div>
    </article>
    );
    return (
      <div>
        {redirectIfDeleted}
        {postArticle}
        <button onClick={this.handleDeletePost}>Delete</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.id;
  const post = state.posts.find(p => p._id === postId);
  const postCount = state.posts.length;
  const token = state.user.token;
  return {
    post,
    token,
    postCount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: (id, token) => {
      dispatch(deletePost(id, token));
    }
  }
};

Post = connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);

export default Post;