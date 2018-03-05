import { combineReducers } from 'redux';
import posts from './posts';
import user from './user';
import filter from './filter';

const blogApp = combineReducers({
  posts,
  user,
  filter
});

export default blogApp