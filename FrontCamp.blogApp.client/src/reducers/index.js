import { combineReducers } from 'redux';
import posts from './posts';
import user from './user';
import filter from './filter';
import fetch from './fetch';

const blogApp = combineReducers({
  posts,
  user,
  filter,
  fetch
});

export default blogApp