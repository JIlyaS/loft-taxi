import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './modules';
import { loginMiddleware, registerMiddleware } from './modules/auth';
import { getCardMiddleware, setCardMiddleware } from './modules/card';

const createAppStore = () => {
  const store = createStore(rootReducer, compose(
    composeWithDevTools(
      applyMiddleware(loginMiddleware), 
      applyMiddleware(registerMiddleware),
      applyMiddleware(getCardMiddleware), 
      applyMiddleware(setCardMiddleware),
    )));

    return store;
}

export default createAppStore;