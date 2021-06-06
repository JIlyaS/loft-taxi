import { fetchAddressListSaga } from './sagas';
import { recordSaga } from '../../utils/recordSaga';
import { fetchAddressRequest } from './actions';
import { FETCH_ADDRESS_SUCCESS } from '../../constants/actionTypes';

jest.mock('../../api/address', () => ({
  getAddressList: jest.fn(() => ({ 
    status: 200, 
    data: { addresses: ["Пулково (LED)", "Эрмитаж", "Кинотеатр Аврора", "Мариинский театр"] }
  }))
}));

describe('address', () => {
  describe('#FETCH_ADDRESS_REQUEST', () => {
    it('address through api', async () => {
      const dispatched = await recordSaga(
        fetchAddressListSaga, 
        fetchAddressRequest()
      );
      expect(dispatched).toEqual([
        {
          type: FETCH_ADDRESS_SUCCESS
        }
      ]);
    });
  });
});