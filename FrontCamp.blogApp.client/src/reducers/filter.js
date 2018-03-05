const filter = (state = {}, action) => {
  switch (action.type) {
    case 'SET_FILTER_AUTHOR':
    return Object.assign({}, state, {author: action.author})
    default:
      return state;
  }
};

export default filter;