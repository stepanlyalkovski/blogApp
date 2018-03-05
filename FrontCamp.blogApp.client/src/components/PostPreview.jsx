import React, { Component } from 'react';

class PostPreview extends Component {
  constructor(props) {
    super(props);
    this.post = this.props.post;
    this.post.localDate = (new Date(this.post.date)).toLocaleDateString();
    this.previewText = this.getPreviewText(this.post.text);
  }

  getPreviewText(text) {
    if (text.length <= 10) {
      return text;
    }

    return text.substring(0, 10) + '...';
  }

  render() {
    return (
      <article className="card grey lighten-5 z-depth-3 post">
        <div className="card-content">
          <header>
            <h1 className="card-title">{this.post.title}</h1>
            <p className="post-date">Posted at <time dateTime={this.post.date}>{this.post.localDate}</time></p>
          </header>
          <p className="card-content">{this.previewText}</p>
          <div className="post-tag-list">
            {this.post.tags.map(tag => <span key={tag} className='chip'>{tag}</span>)}
          </div>
          <footer>
            Author: {this.post.author}
          </footer>
        </div>
      </article>
    );
  }
}


export default PostPreview;