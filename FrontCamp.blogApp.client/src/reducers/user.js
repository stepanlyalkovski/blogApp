const user = (state = {}, action) => {
  switch (action.type) {
    case 'USER_REGISTER_REQUEST':
      return {
        inProgress: true
      };
    case 'USER_REGISTER_SUCCESS':
      return {
        isRegistered: true,
        author: action.user.author,
        inProgress: false
      };
    case 'USER_REGISTER_FAILURE':
      return {
        isRegistered: false,
        inProgress: false,
        error: action.error
      };
    case 'USER_LOGIN_REQUEST':
      return {
        inProgress: true
      };
    case 'USER_LOGIN_SUCCESS':
      return {
        isLoggedIn: true,
        author: action.user.author,
        token: action.user.token,
        inProgress: false
      };
    case 'USER_LOGIN_FAILURE':
      return {
        isLoggedIn: false,
        inProgress: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default user;