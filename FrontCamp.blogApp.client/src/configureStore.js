import {createStore} from "redux";
import blogApp from './reducers'

const configureStore = () => {
  const store = createStore(blogApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return store;
};

export default configureStore;