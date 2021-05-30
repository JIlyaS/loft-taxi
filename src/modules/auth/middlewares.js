import { login, register } from '../../api/auth';
import {
  fetchLoginRequest,
  fetchLoginSuccess,
  fetchLoginFailure,
  fetchRegisterRequest,
  fetchRegisterSuccess,
  fetchRegisterFailure
} from './actions';
  
export const loginMiddleware = store => next => async (action) => {
  if (action.type === fetchLoginRequest.toString()) {
    try {
      const { email, password } = action.payload;
      const data = await login({ email, password });
      if (data.status === 200) {
        localStorage.setItem('token', data.data.token);
        store.dispatch(fetchLoginSuccess(data.data.token));
      } else {
        store.dispatch(fetchLoginFailure(data.data.error));
      }
    } catch (error) {
      console.error(error);
      store.dispatch(fetchLoginFailure(error));
    }
  } else {
    next(action);
  }
};

export const registerMiddleware = store => next => async (action) => {
  if (action.type === fetchRegisterRequest.toString()) {
    try {
      const { email, password, userName } = action.payload;
      const name = userName.split(' ')[0];
      const surname = userName.split(' ')[1];
      const data = await register({ email, password, name, surname });
      if (data.status === 200) {
        localStorage.setItem('token', data.data.token);
        store.dispatch(fetchRegisterSuccess(data.data.token));
      } else {
        store.dispatch(fetchRegisterFailure(data.data.error));
      }
    } catch (error) {
      console.error(error);
      store.dispatch(fetchRegisterFailure(error));
    }
  } else {
    next(action);
  }
};