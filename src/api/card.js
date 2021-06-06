import axios from './axios';

export const getCard = ({ token }) => {
  return axios.get('/card', {
    params: {
      token
    }
  })
};

export const setCard = ({ cardNumber, expiryDate, cardName, cvc, token }) => {
  return axios.post('/card', {
    cardNumber,
    expiryDate,
    cardName,
    cvc,
    token,
  })
};

