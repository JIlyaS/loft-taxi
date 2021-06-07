import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules';
import rootSaga from './sagas';
// import { loginMiddleware, registerMiddleware } from './modules/auth';
// import { getCardMiddleware, setCardMiddleware } from './modules/card';

const sagaMiddleware = createSagaMiddleware();

const createAppStore = () => {
  const store = createStore(rootReducer, compose(composeWithDevTools(applyMiddleware(sagaMiddleware))));

  sagaMiddleware.run(rootSaga);

  return store;
}

export default createAppStore;