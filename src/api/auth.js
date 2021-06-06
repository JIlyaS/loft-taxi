import axios from './axios';

export const login = ({ email, password }) => {
  return axios.post('/auth', {
    email,
    password
  })
};

export const register = ({ email, password, name, surname }) => {
  return axios.post('/register', {
      email,
      password,
      name,
      surname
  });
};
