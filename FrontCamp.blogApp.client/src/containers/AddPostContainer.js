import { connect } from 'react-redux'
import { addPost } from '../actions'
import AddPost from '../components/AddPost.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    author: state.author
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addPost: (post) => {
      dispatch(addPost(post));
    }
  }
};

const AddPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPost);

export default AddPostContainer;