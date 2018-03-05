import { v4 } from 'uuid';
import apiService from "../services/apiService";

export const addPost = (post, token) => {
  return dispatch => {

    apiService.addPost(post, token)
      .then(
        post => {
          dispatch(success(post));
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

  function success(post) { return { type: 'ADD_POST', post } }
  function failure(error) { return { type: 'ADD_POST_FAILURE', error } }
};

export const getPosts = (token) => {
  return dispatch => {
    apiService.getPosts(token)
      .then(
        posts => {
          dispatch(success(posts));
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

  function success(posts) { return { type: 'ADD_POSTS', posts } }
  function failure(error) { return { type: 'ADD_POSTS_FAILURE', error } }
};

export const deletePost = (postId, token) => {
  return dispatch => {
    apiService.deletePost(postId, token)
      .then(
        () => {
          dispatch(success(postId));
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

  function success(postId) { return { type: 'DELETE_POST', postId } }
  function failure(error) { return { type: 'DELETE_POST_FAILURE', error } }
};

export const register = user => {
  return dispatch => {
    dispatch(request(user));

    apiService.register(user)
      .then(
        user => {
          dispatch(success(user));
        },
        error => {
          dispatch(failure(error));
        }
      );

    function request(user) { return { type: 'USER_REGISTER_REQUEST', user } }
    function success(user) { return { type: 'USER_REGISTER_SUCCESS', user } }
    function failure(error) { return { type: 'USER_REGISTER_FAILURE', error } }
  };
};

export const login = user => {
  return dispatch => {
    dispatch(request(user));

    apiService.login(user)
      .then(
        user => {
          dispatch(success(user));
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

  function request(user) { return { type: 'USER_LOGIN_REQUEST', user } }
  function success(user) { return { type: 'USER_LOGIN_SUCCESS', user } }
  function failure(error) { return { type: 'USER_LOGIN_FAILURE', error } }
};

export const logout = () => ({type: 'USER_LOGOUT'});

export const setFilter = author => ({type: 'SET_FILTER_AUTHOR', author});