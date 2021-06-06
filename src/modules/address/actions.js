import { createAction } from 'redux-actions';

import { 
  FETCH_ADDRESS_REQUEST, 
  FETCH_ADDRESS_SUCCESS, 
  FETCH_ADDRESS_FAILURE, 
} from '../../constants/actionTypes';

export const fetchAddressRequest = createAction(FETCH_ADDRESS_REQUEST);
export const fetchAddressSuccess = createAction(FETCH_ADDRESS_SUCCESS);
export const fetchAddressFailure = createAction(FETCH_ADDRESS_FAILURE);
