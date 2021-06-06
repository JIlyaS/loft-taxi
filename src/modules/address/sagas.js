import { call, put, takeLatest } from 'redux-saga/effects';

import { getAddressList } from '../../api/address';
import { showToastError } from '../../utils/toast';
import {
  fetchAddressSuccess,
  fetchAddressFailure,
} from './actions';

import { 
  FETCH_ADDRESS_REQUEST,
} from '../../constants/actionTypes';

export function* fetchAddressListSaga({ payload }) {
  try {
    const data = yield call(getAddressList, payload);
    if (data.status === 200) {
      yield put(fetchAddressSuccess(data.data.addresses));
    } else {
      showToastError(data.data.error);
      yield put(fetchAddressFailure(data.data.error));
    }
  } catch (error) {
    console.error(error);
    showToastError('Ошибка получения списка адресов!');
    yield put(fetchAddressFailure(error));
  }
}

export default function* AddressSaga() {
  yield takeLatest(FETCH_ADDRESS_REQUEST, fetchAddressListSaga);
}
