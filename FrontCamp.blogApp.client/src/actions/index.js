import { v4 } from 'uuid';

export const addPost = post => {
  post.id = v4();
  return {
    type: 'ADD_POST',
    post
  }
};

export const deletePost = postId => {
  return {
    type: 'DELETE_POST',
    postId
  }
};