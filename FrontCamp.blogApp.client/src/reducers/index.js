import { combineReducers } from 'redux';
import posts from './posts';

const blogApp = combineReducers({
  posts
});

export default blogApp