import { call, put, takeLatest } from 'redux-saga/effects';

import { login, register } from '../../api/auth';
import {
  fetchLoginSuccess,
  fetchLoginFailure,
  fetchRegisterSuccess,
  fetchRegisterFailure
} from './actions';

import { 
  FETCH_LOGIN_REQUEST,
  FETCH_REGISTER_REQUEST, 
} from '../../constants/actionTypes';

function* fetchLoginSaga({ payload }) {
  try {
    const data = yield call(login, payload);
    if (data.data.success === true) {
      localStorage.setItem('token', data.data.token);
      yield put(fetchLoginSuccess(data.data.token));
    } else {
      yield put(fetchLoginFailure(data.data.error));
    }
  } catch (error) {
    console.error(error);
    yield put(fetchLoginFailure(error));
  }
}

function* fetchRegisterSaga({ payload }) {
  try {
    const { email, password, userName } = payload;
    const name = userName.split(' ')[0];
    const surname = userName.split(' ')[1];
    const data = yield call(register, { email, password, name, surname });
    if (data.data.success === true) {
      localStorage.setItem('token', data.data.token);
      yield put(fetchRegisterSuccess(data.data.token));
    } else {
      yield put(fetchRegisterFailure(data.data.error));
    }
  } catch (error) {
    console.error(error);
    yield put(fetchRegisterFailure(error));
  }
}

export default function* AuthSaga() {
  yield takeLatest(FETCH_LOGIN_REQUEST, fetchLoginSaga);
  yield takeLatest(FETCH_REGISTER_REQUEST, fetchRegisterSaga);
}
