import reducer from './reducer';
import {
  fetchLoginRequest,
  fetchLoginSuccess,
  fetchLoginFailure,
  fetchRegisterRequest,
  fetchRegisterSuccess,
  fetchRegisterFailure,
  logOut,
} from './actions';

describe('Reducer auth work correctly', () => {
  it(`Reducer auth load data without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      isLoadingLogin: false,
      isLoadingRegister: false,
      isLoggedIn: false,
      token: null,
      loginError: null,
      registerError: null,
    });
  });

  it(`Reducer should load login user request by a given value`, () => {
    expect(reducer({
      isLoadingLogin: false,
      isLoadingRegister: false,
      isLoggedIn: false,
      token: null,
      loginError: null,
      registerError: null,
    }, {
      type: fetchLoginRequest.toString(),
    })).toEqual({
      isLoadingLogin: true,
      isLoadingRegister: false,
      isLoggedIn: false,
      token: null,
      loginError: null,
      registerError: null,
    });
  });

  it(`Reducer should load login user success by a given value`, () => {
    expect(reducer({
      isLoadingLogin: false,
      isLoadingRegister: false,
      isLoggedIn: false,
      token: null,
      loginError: null,
      registerError: null,
    }, {
      type: fetchLoginSuccess.toString(),
      payload: '123',
    })).toEqual({
      isLoadingLogin: false,
      isLoadingRegister: false,
      isLoggedIn: true,
      token: '123',
      loginError: null,
      registerError: null,
    });
  });

  it(`Reducer should load login user failure by a given value`, () => {
    expect(reducer({
      isLoadingLogin: false,
      isLoadingRegister: false,
      isLoggedIn: false,
      token: null,
      loginError: null,
      registerError: null,
    }, {
      type: fetchLoginFailure.toString(),
      payload: 'Error'
    })).toEqual({
      isLoadingLogin: false,
      isLoadingRegister: false,
      isLoggedIn: false,
      token: null,
      loginError: 'Error',
      registerError: null,
    });
  });

  it(`Reducer should load register user by a given value`, () => {
    expect(reducer({
      isLoadingLogin: false,
      isLoadingRegister: false,
      isLoggedIn: false,
      token: null,
      loginError: null,
      registerError: null,
    }, {
      type: fetchRegisterRequest.toString(),
    })).toEqual({
      isLoadingLogin: false,
      isLoadingRegister: true,
      isLoggedIn: false,
      token: null,
      loginError: null,
      registerError: null,
    });
  });

  it(`Reducer should load register user success by a given value`, () => {
    expect(reducer({
      isLoadingLogin: false,
      isLoadingRegister: false,
      isLoggedIn: false,
      token: null,
      loginError: null,
      registerError: null,
    }, {
      type: fetchRegisterSuccess.toString(),
      payload: '123',
    })).toEqual({
      isLoadingLogin: false,
      isLoadingRegister: false,
      isLoggedIn: true,
      token: '123',
      loginError: null,
      registerError: null,
    });
  });

  it(`Reducer should load register user failure by a given value`, () => {
    expect(reducer({
      isLoadingLogin: false,
      isLoadingRegister: false,
      isLoggedIn: false,
      token: null,
      loginError: null,
      registerError: null,
    }, {
      type: fetchRegisterFailure.toString(),
      payload: 'Error'
    })).toEqual({
      isLoadingLogin: false,
      isLoadingRegister: false,
      isLoggedIn: false,
      token: null,
      loginError: null,
      registerError: 'Error',
    });
  });

  it(`Reducer should logout user by a given value`, () => {
    expect(reducer({
      isLoadingLogin: false,
      isLoadingRegister: false,
      isLoggedIn: true,
      token: '123',
      loginError: null,
      registerError: null,
    }, {
      type: logOut.toString(),
    })).toEqual({
      isLoadingLogin: false,
      isLoadingRegister: false,
      isLoggedIn: false,
      token: null,
      loginError: null,
      registerError: null,
    });
  });
});
