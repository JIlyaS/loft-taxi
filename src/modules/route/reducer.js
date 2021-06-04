import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import {
  fetchRouteRequest,
  fetchRouteSuccess,
  fetchRouteFailure,
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
    [fetchRouteRequest]: (_state, action) => null,
    [fetchRouteSuccess]: (_state, action) => action.payload,
    [fetchRouteFailure]: (_state, action) => null, 
  },
  null
);

const routeError = handleActions(
  {
    [fetchRouteRequest]: (_state, action) => null,
    [fetchRouteSuccess]: (_state, action) => null,
    [fetchRouteFailure]: (_state, action) => action.payload, 
  },
  null
);


export default combineReducers({
  isLoadingRoute,
  route,
  routeError,
});
