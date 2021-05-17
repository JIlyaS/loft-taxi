export const login = async ({ email, password }) => {
  return fetch(` https://loft-taxi.glitch.me/auth`, {
    method: 'POST',
    body: JSON.stringify({
      "email": email,
      "password": password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json());
}

export const register = async ({ email, password, name, surname }) => {
  return fetch(` https://loft-taxi.glitch.me/register`, {
    method: 'POST',
    body: JSON.stringify({
      "email": email,
      "password": password,
      "name": name,
      "surname": surname
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json());
}