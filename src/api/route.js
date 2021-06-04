import axios from './axios';

export const getRoute = ({ from, to }) => {
  return axios.get('/route', {
    params: {
      from,
      to,
    }
  });
};
