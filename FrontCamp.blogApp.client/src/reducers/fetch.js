const fetch = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_START':
    return true;
    case 'FETCH_END':
    return false;
    default:
      return state;
  }
};

export default fetch;