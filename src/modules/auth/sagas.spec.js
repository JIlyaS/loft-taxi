import { fetchLoginSaga, fetchRegisterSaga } from './sagas';
import { recordSaga } from '../../utils/recordSaga';
import { fetchLoginRequest, fetchRegisterRequest } from './actions';
import { 
  FETCH_LOGIN_SUCCESS,
  FETCH_REGISTER_SUCCESS, 
} from '../../constants/actionTypes';

jest.mock('../../api/auth', () => ({
  login: jest.fn(() => ({data: {token: '123', success: true}, status: 200})), 
  register: jest.fn(() => ({data: {token: '456', success: true}, status: 200}
))}));

describe('auth', () => {
  describe('#FETCH_LOGIN_REQUEST', () => {
    it('auth through api', async () => {
      const dispatched = await recordSaga(
        fetchLoginSaga, 
        fetchLoginRequest({email: 'testlogin', password: 'testpassword'})
      );
      expect(dispatched).toEqual([
        {
          type: FETCH_LOGIN_SUCCESS
        }
      ]);
    });
  });

  describe('#FETCH_REGISTER_REQUEST', () => {
    it('auth through api', async () => {
      const dispatched = await recordSaga(
        fetchRegisterSaga, 
        fetchRegisterRequest({
          email: 'testlogin',
          userName: 'testname',
          password: 'testpassword'
        }));
      expect(dispatched).toEqual([
        {
          type: FETCH_REGISTER_SUCCESS
        }
      ]);
    });
  });
});