export const getCard = async ({ token }) => {
  const url = new URL("https://loft-taxi.glitch.me/card");
  const params = { token };
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());
}

export const setCard = async ({ cardNumber, expiryDate, cardName, cvc, token }) => {
  return fetch(`https://loft-taxi.glitch.me/card`, {
    method: 'POST',
    body: JSON.stringify({
      "cardNumber": cardNumber,
      "expiryDate": expiryDate,
      "cardName":  cardName,
      "cvc": cvc,
      "token": token,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());
}