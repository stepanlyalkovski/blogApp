import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost} from '../actions';
import { Redirect, Link } from "react-router-dom";

class Post extends Component {
  constructor(props, t) {
    super(props);
    this.id = this.props.match.params.id;
    this.initialPostCount = this.props.postCount;

    this.handleDeletePost = this.handleDeletePost.bind(this);
  }

  handleDeletePost() {
    this.props.deletePost(this.props.post._id, this.props.user.token);
  }

  render() {
    const post = this.props.post;
    const isPostDeleted = this.initialPostCount !== this.props.postCount;
    const isAbleToDelete = post && this.props.user.author === post.author;
    const redirectIfDeleted = (isPostDeleted && <Redirect to={{pathname: "/blogs"}}/>);
    const deleteButton = (isAbleToDelete && <button className="waves-effect red lighten-1 btn" onClick={this.handleDeletePost}>Delete</button>);
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
        <div className="row">
          <div className="col s8 offset-s2">
            {postArticle}
          <div className="row">
          <div className="col s3">
            <Link to={'/blogs'} className="waves-effect grey btn">Back to blogs</Link>
          </div>
          <div className="col s3">
            {deleteButton}
          </div>
        </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.id;
  const post = state.posts.find(p => p._id === postId);
  const postCount = state.posts.length;
  const user = state.user;
  return {
    post,
    user,
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