import { createAction } from 'redux-actions';

import { 
  FETCH_ROUTE_REQUEST, 
  FETCH_ROUTE_SUCCESS, 
  FETCH_ROUTE_FAILURE, 
} from '../../constants/actionTypes';

export const fetchRouteRequest = createAction(FETCH_ROUTE_REQUEST);
export const fetchRouteSuccess = createAction(FETCH_ROUTE_SUCCESS);
export const fetchRouteFailure = createAction(FETCH_ROUTE_FAILURE);
