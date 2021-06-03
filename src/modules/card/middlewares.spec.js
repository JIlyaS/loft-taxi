import {getCardMiddleware, setCardMiddleware} from './middlewares';
import { getCard, setCard } from '../../api/card';
import {
  fetchGetCardRequest,
  fetchGetCardSuccess,
  fetchSetCardRequest,
  fetchSetCardSuccess
} from './actions';

const DEFAULT_CARD = {
  id: "123abc",
  cardName: "qweq",
  cardNumber: "1231231313123123123",
  cvc: "123",
  expiryDate: "2021-05-31T05:16:54.627Z",
};

jest.mock('../../api/card', () => ({
  getCard: jest.fn(() => ({...DEFAULT_CARD})), 
  setCard: jest.fn(() => ({success: true}))
}));

describe('card/middleware', () => {
  describe('#FETCH_GET_CARD_REQUEST', () => {
    it('card through api', async () => {
      const dispatch = jest.fn();
      await getCardMiddleware({dispatch})()(
        fetchGetCardRequest({
          token: "123",
        })
      )
      expect(getCard).toBeCalledWith({
        token: null,
      });
      // expect(dispatch).toBeCalledWith({type: fetchGetCardSuccess.toString()});
    });
  });

  describe('#FETCH_SET_CARD_REQUEST', () => {
    it('card through api', async () => {
      const dispatch = jest.fn();
      await setCardMiddleware({dispatch})()(
        fetchSetCardRequest({
          id: "123abc",
          cardName: "IVAN PETROV",
          cardNumber: "3333 3333 3333 3333",
          cvc: "222",
          expiryDate: "2021-04-29T05:16:54.627Z",
        })
      );
      expect(setCard).toBeCalledWith({
        cardName: "IVAN PETROV",
        cardNumber: "3333 3333 3333 3333",
        cvc: "222",
        expiryDate: "2021-04-29T05:16:54.627Z",
        token: null,
      });
      // expect(dispatch).toBeCalledWith({type: fetchSetCardSuccess.toString()});
    });
  });
});
