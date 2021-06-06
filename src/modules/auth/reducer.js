import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import {
  fetchLoginRequest,
  fetchLoginSuccess,
  fetchLoginFailure,
  fetchRegisterRequest,
  fetchRegisterSuccess,
  fetchRegisterFailure,
  logOut,
} from './actions';

const isLoadingLogin = handleActions(
  {
    [fetchLoginRequest]: (_state, action) => true,
    [fetchLoginSuccess]: (_state, action) => false,
    [fetchLoginFailure]: (_state, action) => false, 
  },
  false
);

const isLoadingRegister = handleActions(
  {
    [fetchRegisterRequest]: (_state, action) => true,
    [fetchRegisterSuccess]: (_state, action) => false,
    [fetchRegisterFailure]: (_state, action) => false, 
  },
  false
);

// const isLoadingLogout = handleActions(
//   {
//     [fetchLogoutRequest]: (_state, action) => true,
//     [fetchLogoutSuccess]: (_state, action) => false,
//     [fetchLogoutFailure]: (_state, action) => false, 
//   },
//   false
// );

const isLoggedIn = handleActions(
  {
    [fetchRegisterRequest]: (_state, action) => false,
    [fetchRegisterSuccess]: (_state, action) => true,
    [fetchRegisterFailure]: (_state, action) => false, 
    [fetchLoginRequest]: (_state, action) => false,
    [fetchLoginSuccess]: (_state, action) => true,
    [fetchLoginFailure]: (_state, action) => false,
    [logOut]: (_state, action) => false, 
  },
  !!localStorage.getItem('token')
);

const token = handleActions(
  {
    [fetchRegisterRequest]: (_state, action) => null,
    [fetchRegisterSuccess]: (_state, action) => action.payload,
    [fetchLoginRequest]: (_state, action) => null,
    [fetchLoginSuccess]: (_state, action) => action.payload,
    [logOut]: (_state, action) => null, 
  },
  localStorage.getItem('token')
);

const loginError = handleActions(
  {
    [fetchLoginRequest]: (_state, action) => null,
    [fetchLoginFailure]: (_state, action) => action.payload, 
  },
  null
);

const registerError = handleActions(
  {
    [fetchRegisterRequest]: (_state, action) => null,
    [fetchRegisterFailure]: (_state, action) => action.payload,  
  },
  null
);

export default combineReducers({
  isLoadingLogin,
  isLoadingRegister,
  isLoggedIn,
  token,
  loginError,
  registerError
});
