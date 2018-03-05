import { combineReducers } from 'redux';
import posts from './posts';
import user from './user';

const blogApp = combineReducers({
  posts,
  user
});

export default blogApp