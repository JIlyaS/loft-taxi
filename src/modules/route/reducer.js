import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import {
  fetchRouteRequest,
  fetchRouteSuccess,
  fetchRouteFailure,
  setFromRoute,
  setToRoute,
  setOrderSuccess
} from './actions';

const isLoadingRoute = handleActions(
  {
    [fetchRouteRequest]: (_state, action) => true,
    [fetchRouteSuccess]: (_state, action) => false,
    [fetchRouteFailure]: (_state, action) => false, 
  },
  false
);

const route = handleActions(
  {
    [fetchRouteRequest]: (_state, action) => [],
    [fetchRouteSuccess]: (_state, action) => action.payload,
    [fetchRouteFailure]: (_state, action) => [], 
  },
  []
);

const routeError = handleActions(
  {
    [fetchRouteRequest]: (_state, action) => null,
    [fetchRouteSuccess]: (_state, action) => null,
    [fetchRouteFailure]: (_state, action) => action.payload, 
  },
  null
);

const fromRoute = handleActions(
  {
    [setFromRoute]: (_state, action) => action.payload,
  },
  ''
);

const toRoute = handleActions(
  {
    [setToRoute]: (_state, action) => action.payload,
  },
  ''
);

const isRouteSuccess = handleActions(
  {
    [fetchRouteRequest]: (_state, action) => false,
    [setOrderSuccess]: (_state, action) => action.payload,
  },
  false
);


export default combineReducers({
  isLoadingRoute,
  route,
  routeError,
  fromRoute,
  toRoute,
  isRouteSuccess
});
