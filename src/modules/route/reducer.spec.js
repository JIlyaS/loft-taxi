import reducer from './reducer';
import {
  fetchRouteRequest,
  fetchRouteSuccess,
  fetchRouteFailure,
  setFromRoute,
  setToRoute,
  setOrderSuccess,
} from './actions';

describe('Reducer route work correctly', () => {
  it(`Reducer auth load data without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      isLoadingRoute: false,
      route: [],
      routeError: null,
      fromRoute: '',
      toRoute: '',
      isRouteSuccess: false
    });
  });

  it(`Reducer should load address list request by a given value`, () => {
    expect(reducer({
      isLoadingRoute: false,
      route: [],
      routeError: null,
      fromRoute: '',
      toRoute: '',
      isRouteSuccess: false
    }, {
      type: fetchRouteRequest.toString(),
    })).toEqual({
      isLoadingRoute: true,
      route: [],
      routeError: null,
      fromRoute: '',
      toRoute: '',
      isRouteSuccess: false
    });
  });

  it(`Reducer should load address list success by a given value`, () => {
    expect(reducer({
      isLoadingRoute: false,
      route: [],
      routeError: null,
      fromRoute: '',
      toRoute: '',
      isRouteSuccess: false
    }, {
      type: fetchRouteSuccess.toString(),
      payload: [[30.316273, 59.940578],
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
    ],
    })).toEqual({
      isLoadingRoute: false,
      route: [[30.316273, 59.940578],
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
    ],
      routeError: null,
      fromRoute: '',
      toRoute: '',
      isRouteSuccess: false
    });
  });

  it(`Reducer should load address list failure by a given value`, () => {
    expect(reducer({
      isLoadingRoute: false,
      route: [],
      routeError: null,
      fromRoute: '',
      toRoute: '',
      isRouteSuccess: false
    }, {
      type: fetchRouteFailure.toString(),
      payload: 'Error'
    })).toEqual({
      isLoadingRoute: false,
      route: [],
      routeError: 'Error',
      fromRoute: '',
      toRoute: '',
      isRouteSuccess: false
    });
  });

  it(`Reducer should select from route by a given value`, () => {
    expect(reducer({
      isLoadingRoute: false,
      route: [],
      routeError: null,
      fromRoute: '',
      toRoute: '',
      isRouteSuccess: false
    }, {
      type: setFromRoute.toString(),
      payload: 'Пулково'
    })).toEqual({
      isLoadingRoute: false,
      route: [],
      routeError: null,
      fromRoute: 'Пулково',
      toRoute: '',
      isRouteSuccess: false
    });
  });

  it(`Reducer should select to route by a given value`, () => {
    expect(reducer({
      isLoadingRoute: false,
      route: [],
      routeError: null,
      fromRoute: '',
      toRoute: '',
      isRouteSuccess: false
    }, {
      type: setToRoute.toString(),
      payload: 'Пулково'
    })).toEqual({
      isLoadingRoute: false,
      route: [],
      routeError: null,
      fromRoute: '',
      toRoute: 'Пулково',
      isRouteSuccess: false
    });
  });

  it(`Reducer should is updated route by a given value`, () => {
    expect(reducer({
      isLoadingRoute: false,
      route: [],
      routeError: null,
      fromRoute: '',
      toRoute: '',
      isRouteSuccess: false
    }, {
      type: setOrderSuccess.toString(),
      payload: true
    })).toEqual({
      isLoadingRoute: false,
      route: [],
      routeError: null,
      fromRoute: '',
      toRoute: '',
      isRouteSuccess: true
    });
  });
});
