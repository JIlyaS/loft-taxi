import reducer from './reducer';
import {
  fetchRouteRequest,
  fetchRouteSuccess,
  fetchRouteFailure,
} from './actions';

describe('Reducer route work correctly', () => {
  it(`Reducer auth load data without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      isLoadingRoute: false,
      route: null,
      routeError: null,
    });
  });

  it(`Reducer should load address list request by a given value`, () => {
    expect(reducer({
      isLoadingRoute: false,
      route: null,
      routeError: null,
    }, {
      type: fetchRouteRequest.toString(),
    })).toEqual({
      isLoadingRoute: true,
      route: null,
      routeError: null,
    });
  });

  it(`Reducer should load address list success by a given value`, () => {
    expect(reducer({
      isLoadingRoute: false,
      route: null,
      routeError: null,
    }, {
      type: fetchRouteSuccess.toString(),
      payload: {},
    })).toEqual({
      isLoadingRoute: false,
      route: {},
      routeError: null,
    });
  });

  it(`Reducer should load login user failure by a given value`, () => {
    expect(reducer({
      isLoadingRoute: false,
      route: null,
      routeError: null,
    }, {
      type: fetchRouteFailure.toString(),
      payload: 'Error'
    })).toEqual({
      isLoadingRoute: false,
      route: null,
      routeError: 'Error',
    });
  });
});
