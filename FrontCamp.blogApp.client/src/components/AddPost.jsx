import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';
import { Redirect } from "react-router-dom";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.textMaxLength = 3000;
    this.titleMaxLength = 30;
    this.initialPostCount = this.props.postCount;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleSubmit(e) {
    e.preventDefault();

    const title = this.state.title;
    const text = this.state.text;
    let tagsSet = [];
    if (this.state.tags) {
      tagsSet = new Set(this.state.tags.split(',').map(t => t.trim()))
    }

    const createdPost = {
      title,
      text,
      tags: [...tagsSet],
      date: new Date()
    };

    this.props.addPost(createdPost, this.props.token);
  }

  render() {
    const isPostAdded = this.initialPostCount !== this.props.postCount;
    const redirectIfAdded = (isPostAdded && <Redirect to={{pathname: "/blogs"}}/>);

    return (
      <section className="row">
        {redirectIfAdded}
        <h2 className="subtitle">Create Post</h2>
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <label htmlFor="title">Post title</label>
              <input className="validate"  name="title" id="title" type="text" maxLength={this.titleMaxLength} onChange={this.onChange} required/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea className="materialize-textarea validate" name="text" id="text" placeholder="Enter text here..." maxLength={this.textMaxLength} onChange={this.onChange} cols="30" rows="10" required></textarea>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <label htmlFor="tags">Tags <small>(separate by comma)</small></label>
              <input name="tags" id="tags" type="text" onChange={this.onChange}/>
            </div>
          </div>
          <div className="row">
            <div className="col s2">
              <button className="waves-effect waves-light btn grey lighten-1" onClick={this.props.onCancelClick}>Cancel</button>              
            </div>
            <div className="col s2">
              <button className="waves-effect waves-light btn" type="submit">Add</button>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const postCount = state.posts.length;
  const token = state.user.token;
  return {
    postCount,
    token
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (user, token) => {
      dispatch(addPost(user, token));
    }
  }
};

AddPost = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPost);

export default AddPost;