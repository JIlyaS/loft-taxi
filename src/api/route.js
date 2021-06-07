import axios from './axios';

export const getRoute = ({ from, to }) => {
  // const uri = decodeURI(`/route?address1=${from}&address2=${to}`)
  return axios.get('/route', {
    params: {
      address1: from,
      address2: to,
    }
  });
};
