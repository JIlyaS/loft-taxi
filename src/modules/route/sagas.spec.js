import { fetchRouteSaga } from './sagas';
import { recordSaga } from '../../utils/recordSaga';
import { fetchRouteRequest } from './actions';
import { FETCH_ROUTE_SUCCESS, SET_ORDER_SUCCESS } from '../../constants/actionTypes';

jest.mock('../../api/route', () => ({
  getRoute: jest.fn(() => ({ 
    status: 200, 
    data: [[30.316273, 59.940578],
    [30.316589, 59.940495],
    [30.320316, 59.942169],
    [30.325672, 59.94429],
    [30.332203, 59.945786],
    [30.335087, 59.941833],
    [30.336704, 59.93922],
    [30.336357, 59.937344],
    [30.340454, 59.938164],
    [30.341677, 59.938072],
    [30.341167, 59.934372],
    [30.3398, 59.934521]
  ]
  }))
}));

describe('route', () => {
  describe('#FETCH_ROUTE_REQUEST', () => {
    it('route through api', async () => {
      const dispatched = await recordSaga(
        fetchRouteSaga, 
        fetchRouteRequest()
      );
      expect(dispatched).toEqual([
        {
          type: SET_ORDER_SUCCESS
        },
        {
          type: FETCH_ROUTE_SUCCESS
        }
      ]);
    });
  });
});
