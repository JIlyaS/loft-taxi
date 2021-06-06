import { createSelector } from 'reselect';

export const getFromRoute = createSelector(
  state => state.route.fromRoute,
  fromRoute => fromRoute
);

export const getToRoute = createSelector(
  state => state.route.toRoute,
  toRoute => toRoute
);


export const getRoute = createSelector(
  state => state.route.route,
  route => route
);

export const getRouteSuccess = createSelector(
  state => state.route.isRouteSuccess,
  isRouteSuccess => isRouteSuccess
);
