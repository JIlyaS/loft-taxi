import { createAction } from 'redux-actions';

import { 
  FETCH_LOGIN_REQUEST, 
  FETCH_LOGIN_SUCCESS, 
  FETCH_LOGIN_FAILURE, 
  FETCH_REGISTER_REQUEST, 
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_FAILURE,
  // FETCH_LOGOUT_REQUEST,
  LOGOUT,
  // FETCH_LOGOUT_FAILURE
} from '../../constants/actionTypes';

export const fetchLoginRequest = createAction(FETCH_LOGIN_REQUEST);
export const fetchLoginSuccess = createAction(FETCH_LOGIN_SUCCESS);
export const fetchLoginFailure = createAction(FETCH_LOGIN_FAILURE);

export const fetchRegisterRequest = createAction(FETCH_REGISTER_REQUEST);
export const fetchRegisterSuccess = createAction(FETCH_REGISTER_SUCCESS);
export const fetchRegisterFailure = createAction(FETCH_REGISTER_FAILURE);

// export const fetchLogoutRequest = createAction(FETCH_LOGOUT_REQUEST);
export const logOut = createAction(LOGOUT);
// export const fetchLogoutFailure = createAction(FETCH_LOGOUT_FAILURE);