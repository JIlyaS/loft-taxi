import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import {
  fetchAddressRequest,
  fetchAddressSuccess,
  fetchAddressFailure,
} from './actions';

const isLoadingAddress = handleActions(
  {
    [fetchAddressRequest]: (_state, action) => true,
    [fetchAddressSuccess]: (_state, action) => false,
    [fetchAddressFailure]: (_state, action) => false, 
  },
  false
);

const addressList = handleActions(
  {
    [fetchAddressRequest]: (_state, action) => [],
    [fetchAddressSuccess]: (_state, action) => action.payload,
    [fetchAddressFailure]: (_state, action) => [], 
  },
  []
);

const addressError = handleActions(
  {
    [fetchAddressRequest]: (_state, action) => null,
    [fetchAddressSuccess]: (_state, action) => null,
    [fetchAddressFailure]: (_state, action) => action.payload, 
  },
  null
);


export default combineReducers({
  isLoadingAddress,
  addressList,
  addressError,
});
