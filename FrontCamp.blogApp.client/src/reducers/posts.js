const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        action.post
      ];
    case 'ADD_POSTS':
    return [
      ...action.posts
    ];
    case 'DELETE_POST':
      return state.filter(s => s._id !== action.postId);
    default:
      return state;
  }
};

export default posts;