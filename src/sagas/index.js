import { all } from 'redux-saga/effects';
import authSaga from '../modules/auth/sagas';
import cardSaga from '../modules/card/sagas';
import addressSaga from '../modules/address/sagas';
import routesSaga from '../modules/route/sagas';

export default function* rootSaga(getState) {
  yield all([
    authSaga(),
    cardSaga(),
    addressSaga(),
    routesSaga(),
  ]);
}
