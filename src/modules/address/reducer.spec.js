import reducer from './reducer';
import {
  fetchAddressRequest,
  fetchAddressSuccess,
  fetchAddressFailure,
} from './actions';

describe('Reducer address work correctly', () => {
  it(`Reducer address list load data without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      isLoadingAddress: false,
      addressList: [],
      addressError: null,
    });
  });

  it(`Reducer should load address list request by a given value`, () => {
    expect(reducer({
      isLoadingAddress: false,
      addressList: [],
      addressError: null,
    }, {
      type: fetchAddressRequest.toString(),
    })).toEqual({
      isLoadingAddress: true,
      addressList: [],
      addressError: null,
    });
  });

  it(`Reducer should load address list success by a given value`, () => {
    expect(reducer({
      isLoadingAddress: false,
      addressList: [],
      addressError: null,
    }, {
      type: fetchAddressSuccess.toString(),
      payload: [
        "Пулково (LED)",
        "Эрмитаж",
        "Кинотеатр Аврора",
        "Мариинский театр"
      ],
    })).toEqual({
      isLoadingAddress: false,
      addressList: [
        "Пулково (LED)",
        "Эрмитаж",
        "Кинотеатр Аврора",
        "Мариинский театр"
      ],
      addressError: null,
    });
  });

  it(`Reducer should load login user failure by a given value`, () => {
    expect(reducer({
      isLoadingAddress: false,
      addressList: [],
      addressError: null,
    }, {
      type: fetchAddressFailure.toString(),
      payload: 'Error'
    })).toEqual({
      isLoadingAddress: false,
      addressList: [],
      addressError: 'Error',
    });
  });
});
