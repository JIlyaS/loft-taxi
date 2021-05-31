import { createAction } from 'redux-actions';

import { 
  FETCH_GET_CARD_REQUEST, 
  FETCH_GET_CARD_SUCCESS, 
  FETCH_GET_CARD_FAILURE, 
  FETCH_SET_CARD_REQUEST, 
  FETCH_SET_CARD_SUCCESS,
  FETCH_SET_CARD_FAILURE,
  RESET_SUCCESS_CARD,
} from '../../constants/actionTypes';

export const fetchGetCardRequest = createAction(FETCH_GET_CARD_REQUEST);
export const fetchGetCardSuccess = createAction(FETCH_GET_CARD_SUCCESS);
export const fetchGetCardFailure = createAction(FETCH_GET_CARD_FAILURE);

export const fetchSetCardRequest = createAction(FETCH_SET_CARD_REQUEST);
export const fetchSetCardSuccess = createAction(FETCH_SET_CARD_SUCCESS);
export const fetchSetCardFailure = createAction(FETCH_SET_CARD_FAILURE);

export const resetSuccessCard = createAction(RESET_SUCCESS_CARD);
