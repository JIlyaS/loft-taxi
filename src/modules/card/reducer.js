import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import {
  fetchGetCardRequest,
  fetchGetCardSuccess,
  fetchGetCardFailure,
  fetchSetCardRequest,
  fetchSetCardSuccess,
  fetchSetCardFailure,
  resetSuccessCard,
} from './actions';

const isLoadingViewCard = handleActions(
  {
    [fetchGetCardRequest]: (_state, action) => true,
    [fetchGetCardSuccess]: (_state, action) => false,
    [fetchGetCardFailure]: (_state, action) => false, 
  },
  false
);

const isLoadingUpdateCard = handleActions(
  {
    [fetchSetCardRequest]: (_state, action) => true,
    [fetchSetCardSuccess]: (_state, action) => false,
    [fetchSetCardFailure]: (_state, action) => false, 
  },
  false
);

const isUpdateSuccess = handleActions(
  {
    [fetchSetCardRequest]: (_state, action) => false,
    [fetchSetCardSuccess]: (_state, action) => action.payload,
    [fetchSetCardFailure]: (_state, action) => false, 
    [resetSuccessCard]: (_state, action) => false,
  },
  false
);

const currentCard = handleActions(
  {
    [fetchGetCardRequest]: (_state, action) => null,
    [fetchGetCardSuccess]: (_state, action) => {
      return {
          cardNumber: action.payload?.cardNumber ? action.payload.cardNumber : '',
          expiryDate: action.payload?.expiryDate ? action.payload.expiryDate : null, 
          cardName: action.payload?.cardName ? action.payload.cardName : '',
          cvc: action.payload?.cvc ? action.payload.cvc : ''
      }
    },
    [fetchGetCardFailure]: (_state, action) => null,
  },
  null
);

const getCardError = handleActions(
  {
    [fetchGetCardRequest]: (_state, action) => null,
    [fetchGetCardFailure]: (_state, action) => action.payload, 
  },
  null
);

const setCardError = handleActions(
  {
    [fetchSetCardRequest]: (_state, action) => null,
    [fetchSetCardFailure]: (_state, action) => action.payload,  
  },
  null
);

export default combineReducers({
  isLoadingViewCard,
  isLoadingUpdateCard,
  isUpdateSuccess,
  currentCard,
  getCardError,
  setCardError
});
