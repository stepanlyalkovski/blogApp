import { connect } from 'react-redux'
import TodoList from '../components/PostList.jsx';

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
)(TodoList);

export default VisiblePostList