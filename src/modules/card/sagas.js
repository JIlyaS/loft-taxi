import { call, put, takeLatest } from 'redux-saga/effects';

import { getCard, setCard } from '../../api/card';
import { showToastError } from '../../utils/toast';
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

export function* fetchGetCardSaga() {
  try {
    const data = yield call(getCard, { token: localStorage.getItem('token') });
    if (data.status === 200) {
      yield put(fetchGetCardSuccess(data.data));
    } else {
      showToastError(data.data.error);
      yield put(fetchGetCardFailure(data.data.error));
    }
  } catch (error) {
    console.error(error);
    showToastError('Ошибка получения банковских данных!');
    yield put(fetchGetCardFailure(error));
  }
}

export function* fetchSetCardSaga({ payload }) {
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
      yield put(fetchGetCardSuccess({ 
        cardNumber, 
        expiryDate, 
        cardName, 
        cvc, 
        token: localStorage.getItem('token') 
      }));
    } else {
      showToastError(data.data.error);
      yield put(fetchSetCardFailure(data.data.error));
    }
  } catch (error) {
    console.error(error);
    showToastError('Ошибка отправки банковсих данных!');
    yield put(fetchSetCardFailure(error));
  }
}

export default function* CardSaga() {
  yield takeLatest(FETCH_GET_CARD_REQUEST, fetchGetCardSaga);
  yield takeLatest(FETCH_SET_CARD_REQUEST, fetchSetCardSaga);
}
