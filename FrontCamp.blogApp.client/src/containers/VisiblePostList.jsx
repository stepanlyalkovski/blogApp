import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
};

const VisiblePostList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisiblePostList