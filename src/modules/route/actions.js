import { createAction } from 'redux-actions';

import { 
  FETCH_ROUTE_REQUEST, 
  FETCH_ROUTE_SUCCESS, 
  FETCH_ROUTE_FAILURE,
  SET_FROM_ROUTE,
  SET_TO_ROUTE,
  SET_ORDER_SUCCESS
} from '../../constants/actionTypes';

export const fetchRouteRequest = createAction(FETCH_ROUTE_REQUEST);
export const fetchRouteSuccess = createAction(FETCH_ROUTE_SUCCESS);
export const fetchRouteFailure = createAction(FETCH_ROUTE_FAILURE);

export const setFromRoute = createAction(SET_FROM_ROUTE);
export const setToRoute = createAction(SET_TO_ROUTE);
export const setOrderSuccess =createAction(SET_ORDER_SUCCESS);
