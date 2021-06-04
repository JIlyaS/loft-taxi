import axios from './axios';

export const getAddressList = () => {
  return axios.get('/addressList');
};
