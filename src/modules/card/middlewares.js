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
      if (data.status === 200) {
        store.dispatch(fetchGetCardSuccess(data.data));
      } else {
        store.dispatch(fetchGetCardFailure(data.data.error));
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
      if (data.status === 200) {
        store.dispatch(fetchSetCardSuccess(data.data.success));
      } else {
        store.dispatch(fetchSetCardFailure(data.data.error));
      }
    } catch (error) {
      console.error(error);
      store.dispatch(fetchSetCardFailure(error));
    }
  } else {
    next(action);
  }
};
