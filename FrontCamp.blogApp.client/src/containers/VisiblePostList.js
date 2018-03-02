import { connect } from 'react-redux'
import PostList from '../components/PostList.jsx';

const mapDispatchToProps = dispatch => {
  return {
    // onTodoClick: id => {
    //   dispatch(toggleTodo(id))
    // }
  }
};

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
};

const VisiblePostList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

export default VisiblePostList