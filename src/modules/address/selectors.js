import { createSelector } from 'reselect';

export const getAddressList = createSelector(
  state => state.address.addressList,
  addressList => addressList.map((address) => ({ label: address, value: address }))
);

export const getLoadingAddress = createSelector(
  state => state.address.loadingAddress,
  loadingAddress => loadingAddress
);
