import { connect } from 'react-redux'
import PostList from '../components/PostList.jsx';
import { getPosts } from '../actions';

const filterPosts = (posts, filter) => {
  if (filter && filter.author) {
    return posts.filter(p => p.author === filter.author);
  } 

  return posts;
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: (token) => {
      dispatch(getPosts(token))
    }
  }
};

const mapStateToProps = state => {
  return {
    posts: filterPosts(state.posts, state.filter),
    token: state.user.token
  }
};

const VisiblePostList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

export default VisiblePostList