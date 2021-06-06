import { createSelector } from 'reselect';

export const getLoadingRegister = createSelector(
  state => state.auth.isLoadingRegister,
  isLoadingRegister => isLoadingRegister
);

export const getLoadingLogin = createSelector(
  state => state.auth.isLoadingLogin,
  isLoadingLogin => isLoadingLogin
);