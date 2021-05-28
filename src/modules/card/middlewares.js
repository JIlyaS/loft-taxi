import { getCard, setCard } from '../../api/card';
import {
  fetchGetCardRequest,
  fetchGetCardSuccess,
  fetchGetCardFailure,
  fetchSetCardRequest,
  fetchSetCardSuccess,
  fetchSetCardFailure
} from './actions';
  
export const getCardMiddleware = store => next => async (action) => {
  if (action.type === fetchGetCardRequest.toString()) {
    try {
      const data = await getCard({ token: localStorage.getItem('token') });
      if (data.success) {
        store.dispatch(fetchGetCardSuccess(data.success));
      } else {
        store.dispatch(fetchGetCardFailure(data.error));
      }
    } catch (error) {
      console.error(error);
      store.dispatch(fetchGetCardFailure(error));
    }
  } else {
    next(action);
  }
};

export const setCardMiddleware = store => next => async (action) => {
  if (action.type === fetchSetCardRequest.toString()) {
    try {
      const { cardNumber, expiryDate, cardName, cvc } = action.payload;
      const data = await setCard({ cardNumber, expiryDate, cardName, cvc, token: localStorage.getItem('token') });
      if (data.success) {
        localStorage.setItem('token', data.token);
        store.dispatch(fetchSetCardSuccess(data.token));
      } else {
        store.dispatch(fetchSetCardFailure(data.error));
      }
    } catch (error) {
      console.error(error);
      store.dispatch(fetchSetCardFailure(error));
    }
  } else {
    next(action);
  }
};
