import {loginMiddleware, registerMiddleware} from './middlewares';
import {fetchLoginRequest, fetchRegisterRequest} from './actions';
import { login, register } from '../../api/auth';

jest.mock('../../api/auth', () => ({login: jest.fn(() => ({token: '123', success: true})), register: jest.fn(() => ({token: '456', success: true}))}));

describe('auth/middleware', () => {
  describe('#FETCH_REGISTER_REQUEST', () => {
    it('auth through api', async () => {
      const dispatch = jest.fn();

      await registerMiddleware({dispatch})()(
        fetchRegisterRequest({email: 'testregister@mail.ru', name: 'Илья', surname: 'Колмаков', password: 'testpassword'})
      )

      expect(register).toBeCalledWith({email: 'testregister@mail.ru', name: 'Илья', surname: 'Колмаков', password: 'testpassword'});
      expect(dispatch).toBeCalledWith({type: 'FETCH_REGISTER_SUCCESS'});
    });
  });

  describe('#FETCH_LOGIN_REQUEST', () => {
    it('auth through api', async () => {
      const dispatch = jest.fn();

      await loginMiddleware({dispatch})()(
        fetchLoginRequest({email: 'testlogin@mail.ru', password: 'testpassword'})
      )

      expect(login).toBeCalledWith({email: 'testlogin@mail.ru', password: 'testpassword'});
      // expect(dispatch).toBeCalledWith({type: 'FETCH_LOGIN_SUCCESS'});
    });
  });
});
