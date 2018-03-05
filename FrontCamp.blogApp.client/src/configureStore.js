import { createStore, applyMiddleware } from 'redux';
import blogApp from './reducers'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
  const store = createStore(blogApp,
    composeWithDevTools(
      applyMiddleware(thunk),
    ));

  return store;
};

export default configureStore;