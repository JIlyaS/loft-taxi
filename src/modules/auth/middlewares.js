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
      if (data.success) {
        localStorage.setItem('token', data.token);
        store.dispatch(fetchLoginSuccess(data.token));
      } else {
        store.dispatch(fetchLoginFailure('Неверные данные'));
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
      if (data.success) {
        localStorage.setItem('token', data.token);
        store.dispatch(fetchRegisterSuccess(data.token));
      } else {
        store.dispatch(fetchRegisterFailure('Неверные данные'));
      }
    } catch (error) {
      console.error(error);
      store.dispatch(fetchRegisterFailure(error));
    }
  } else {
    next(action);
  }
};