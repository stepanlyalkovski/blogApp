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
    const userToken = store.getState().user.token;
    if(initialToken !== undefined && userToken !== undefined && initialToken === userToken) {
      return;
    }

    saveState({user: {token: userToken}});
  });

  return store;
};

export default configureStore;