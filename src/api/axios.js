import axios from 'axios';

export default axios.create({
  baseURL: 'https://loft-taxi.glitch.me',
  timeout: 2000,
});