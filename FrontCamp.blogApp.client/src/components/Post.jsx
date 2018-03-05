import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  constructor(props, t) {
    super(props);
    this.id = this.props.match.params.id;
    // this.post = this.props.post;
    // this.post.localDate = (new Date(this.post.date)).toLocaleDateString();
  }

  render() {
    const post = this.props.posts.find(p => p._id === this.id);
    return (
      <div>
        <h1>Post</h1>
        <div>{this.id}</div>
        <div>{post.title}</div>
      </div>
      
      // <article className="card grey lighten-5 z-depth-3 post">
      //   <div className="card-content">
      //     <header>
      //       <h1 className="card-title">{this.post.title}</h1>
      //       <p className="post-date">Posted at <time dateTime={this.post.date}>{this.post.localDate}</time></p>
      //     </header>
      //     <p className="card-content">{this.post.text}</p>
      //     <div className="post-tag-list">
      //       {this.post.tags.map(tag => <span key={tag} className='chip'>{tag}</span>)}
      //     </div>
      //     <footer>
      //       Author: {this.post.author}
      //     </footer>
      //   </div>
      // </article>
    );
  }
}

function mapStateToProps(state) {
  const posts= state.posts;
  return {
    posts
  };
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removePost: (id) => {
//       dispatch(removePost(id));
//     }
//   }
// };

Post = connect(
  mapStateToProps
  //mapDispatchToProps
)(Post);

export default Post;