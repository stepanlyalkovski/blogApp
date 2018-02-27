const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        action.post
      ];
    case 'DELETE_POST':
      return state.filter(s => s.id !== action.postId);
    default:
      return state;
  }
};

export default posts;