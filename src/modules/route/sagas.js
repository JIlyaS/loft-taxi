import { call, put, takeLatest } from 'redux-saga/effects';

import { getRoute } from '../../api/route';
import { showToastError } from '../../utils/toast';
import {
  fetchRouteSuccess,
  fetchRouteFailure,
  setOrderSuccess,
} from './actions';

import { 
  FETCH_ROUTE_REQUEST,
} from '../../constants/actionTypes';

export function* fetchRouteSaga({ payload }) {
  try {
    const data = yield call(getRoute, payload);
    if (data.status === 200) {
      yield put(setOrderSuccess(true));
      yield put(fetchRouteSuccess(data.data));
    } else {
      showToastError(data.data.error);
      yield put(fetchRouteFailure(data.data.error));
    }
  } catch (error) {
    console.error(error);
    showToastError('Ошибка отправки данных маршрута!');
    yield put(fetchRouteFailure(error));
  }
}

export default function* RoutesSaga() {
  yield takeLatest(FETCH_ROUTE_REQUEST, fetchRouteSaga);
}
