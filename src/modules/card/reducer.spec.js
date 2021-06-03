import reducer from './reducer';
import {
  fetchGetCardRequest,
  fetchGetCardSuccess,
  fetchGetCardFailure,
  fetchSetCardRequest,
  fetchSetCardSuccess,
  fetchSetCardFailure,
  resetSuccessCard,
} from './actions';

const DEFAULT_CARD = {
  cardName: "qweq",
  cardNumber: "1231231313123123123",
  cvc: "123",
  expiryDate: "2021-05-31T05:16:54.627Z",
};

describe('Reducer card work correctly', () => {
  it(`Reducer card load data without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      isLoadingViewCard: false,
      isLoadingUpdateCard: false,
      isUpdateSuccess: false,
      currentCard: null,
      getCardError: null,
      setCardError: null,
    });
  });

  it(`Reducer should load card request by a given value`, () => {
    expect(reducer({
      isLoadingViewCard: false,
      isLoadingUpdateCard: false,
      isUpdateSuccess: false,
      currentCard: null,
      getCardError: null,
      setCardError: null,
    }, {
      type: fetchGetCardRequest.toString(),
    })).toEqual({
      isLoadingViewCard: true,
      isLoadingUpdateCard: false,
      isUpdateSuccess: false,
      currentCard: null,
      getCardError: null,
      setCardError: null,
    });
  });

  it(`Reducer should load card success by a given value`, () => {
    expect(reducer({
      isLoadingViewCard: false,
      isLoadingUpdateCard: false,
      isUpdateSuccess: false,
      currentCard: null,
      getCardError: null,
      setCardError: null,
    }, {
      type: fetchGetCardSuccess.toString(),
      payload: DEFAULT_CARD
    })).toEqual({
      isLoadingViewCard: false,
      isLoadingUpdateCard: false,
      isUpdateSuccess: false,
      currentCard: DEFAULT_CARD,
      getCardError: null,
      setCardError: null,
    });
  });

  it(`Reducer should load card failure by a given value`, () => {
    expect(reducer({
      isLoadingViewCard: false,
      isLoadingUpdateCard: false,
      isUpdateSuccess: false,
      currentCard: null,
      getCardError: null,
      setCardError: null,
    }, {
      type: fetchGetCardFailure.toString(),
      payload: 'Error'
    })).toEqual({
      isLoadingViewCard: false,
      isLoadingUpdateCard: false,
      isUpdateSuccess: false,
      currentCard: null,
      getCardError: 'Error',
      setCardError: null,
    });
  });

  it(`Reducer should reset success card updated by a given value`, () => {
    expect(reducer({
      isLoadingViewCard: false,
      isLoadingUpdateCard: false,
      isUpdateSuccess: true,
      currentCard: null,
      getCardError: null,
      setCardError: null,
    }, {
      type: resetSuccessCard.toString(),
    })).toEqual({
      isLoadingViewCard: false,
      isLoadingUpdateCard: false,
      isUpdateSuccess: false,
      currentCard: null,
      getCardError: null,
      setCardError: null,
    });
  });

  it(`Reducer should load update card request by a given value`, () => {
    expect(reducer({
      isLoadingViewCard: false,
      isLoadingUpdateCard: false,
      isUpdateSuccess: false,
      currentCard: null,
      getCardError: null,
      setCardError: null,
    }, {
      type: fetchSetCardRequest.toString(),
    })).toEqual({
      isLoadingViewCard: false,
      isLoadingUpdateCard: true,
      isUpdateSuccess: false,
      currentCard: null,
      getCardError: null,
      setCardError: null,
    });
  });

  it(`Reducer should load update card success by a given value`, () => {
    expect(reducer({
      isLoadingViewCard: false,
      isLoadingUpdateCard: false,
      isUpdateSuccess: false,
      currentCard: null,
      getCardError: null,
      setCardError: null,
    }, {
      type: fetchSetCardSuccess.toString(),
      payload: true
    })).toEqual({
      isLoadingViewCard: false,
      isLoadingUpdateCard: false,
      isUpdateSuccess: true,
      currentCard: null,
      getCardError: null,
      setCardError: null,
    });
  });

  it(`Reducer should load update card failure by a given value`, () => {
    expect(reducer({
      isLoadingViewCard: false,
      isLoadingUpdateCard: false,
      isUpdateSuccess: false,
      currentCard: null,
      getCardError: null,
      setCardError: null,
    }, {
      type: fetchSetCardFailure.toString(),
      payload: 'Error'
    })).toEqual({
      isLoadingViewCard: false,
      isLoadingUpdateCard: false,
      isUpdateSuccess: false,
      currentCard: null,
      getCardError: null,
      setCardError: 'Error',
    });
  });
});

