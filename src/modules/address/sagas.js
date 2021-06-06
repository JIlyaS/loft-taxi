import { call, put, takeLatest } from 'redux-saga/effects';

import { getAddressList } from '../../api/address';
import {
  fetchAddressSuccess,
  fetchAddressFailure,
} from './actions';

import { 
  FETCH_ADDRESS_REQUEST,
} from '../../constants/actionTypes';

function* fetchAddressListSaga({ payload }) {
  try {
    const data = yield call(getAddressList, payload);
    if (data.status === 200) {
      yield put(fetchAddressSuccess(data.data.addresses));
    } else {
      yield put(fetchAddressFailure(data.data.error));
    }
  } catch (error) {
    console.error(error);
    yield put(fetchAddressFailure(error));
  }
}

export default function* AddressSaga() {
  yield takeLatest(FETCH_ADDRESS_REQUEST, fetchAddressListSaga);
}
