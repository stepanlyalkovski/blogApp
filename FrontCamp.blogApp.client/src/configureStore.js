import { createStore, applyMiddleware } from 'redux';
import blogApp from './reducers'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from "./localStorage"
import user from "./reducers/user";

const persistedState = loadState();


const configureStore = () => {
  const store = createStore(
    blogApp,
    persistedState,
    composeWithDevTools(
      applyMiddleware(thunk),
    ));

  store.subscribe(() => {
    const initialToken = persistedState && persistedState.token;
    const stateUser = store.getState().user;
    const userToken = stateUser.token;
    if(initialToken !== undefined && userToken !== undefined && initialToken === userToken) {
      return;
    }

    saveState({user: {token: userToken, author: stateUser.author }});
  });

  return store;
};

export default configureStore;