import { fetchGetCardSaga, fetchSetCardSaga } from './sagas';
import { recordSaga } from '../../utils/recordSaga';
import { fetchGetCardRequest, fetchSetCardRequest } from './actions';
import { FETCH_GET_CARD_SUCCESS, FETCH_SET_CARD_SUCCESS } from '../../constants/actionTypes';

jest.mock('../../api/card', () => ({
  getCard: jest.fn(() => ({ 
    status: 200, 
    data: { 
      success: true,
      data: {
        cardName: "ILYA KOLMAKOV",
        cardNumber: "1223 4444 3333 0000",
        cvc: "111",
        expiryDate: "2031-01-06T10:04:11.395Z",
        id: "recwdlGDfD42ZOGyT"
      }
    }
  })), 
  setCard: jest.fn(() => ({data: {success: true}}))
}));


describe('card', () => {
  describe('#FETCH_GET_CARD_REQUEST', () => {
    it('get card through api', async () => {
      const dispatched = await recordSaga(
        fetchGetCardSaga, 
        fetchGetCardRequest({token: 'recPwka0oj22HMqJp'})
      );
      expect(dispatched).toEqual([
        {
          type: FETCH_GET_CARD_SUCCESS
        }
      ]);
    });
  });

  describe('#FETCH_SET_CARD_REQUEST', () => {
    it('set card through api', async () => {
      const dispatched = await recordSaga(
        fetchSetCardSaga, 
        fetchSetCardRequest({
          cardName: "ILYA KOLMAKOV",
          cardNumber: "1223 4444 3333 0000",
          cvc: "111",
          expiryDate: "2031-01-06T10:04:11.395Z",
        }));
      expect(dispatched).toEqual([
        {
          type: FETCH_SET_CARD_SUCCESS
        },
        {
          type: FETCH_GET_CARD_SUCCESS
        }
      ]);
    });
  });
});
