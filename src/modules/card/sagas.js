import { call, put, takeLatest } from 'redux-saga/effects';

import { getCard, setCard } from '../../api/card';
import {
  fetchGetCardSuccess,
  fetchGetCardFailure,
  fetchSetCardSuccess,
  fetchSetCardFailure
} from './actions';

import { 
  FETCH_GET_CARD_REQUEST,
  FETCH_SET_CARD_REQUEST, 
} from '../../constants/actionTypes';

function* fetchGetCardSaga() {
  try {
    const data = yield call(getCard, { token: localStorage.getItem('token') });
    if (data.data.success === true) {
      yield put(fetchGetCardSuccess(data.data));
    } else {
      yield put(fetchGetCardFailure(data.data.error));
    }
  } catch (error) {
    console.error(error);
    yield put(fetchGetCardFailure(error));
  }
}

function* fetchSetCardSaga({ payload }) {
  try {
    const { cardNumber, expiryDate, cardName, cvc } = payload;
    const data = yield call(setCard, { 
      cardNumber, 
      expiryDate, 
      cardName, 
      cvc, 
      token: localStorage.getItem('token') 
    });
    if (data.data.success === true) {
      yield put(fetchSetCardSuccess(data.data.success));
    } else {
      yield put(fetchSetCardFailure(data.data.error));
    }
  } catch (error) {
    console.error(error);
    yield put(fetchSetCardFailure(error));
  }
}

export default function* CardSaga() {
  yield takeLatest(FETCH_GET_CARD_REQUEST, fetchGetCardSaga);
  yield takeLatest(FETCH_SET_CARD_REQUEST, fetchSetCardSaga);
}
