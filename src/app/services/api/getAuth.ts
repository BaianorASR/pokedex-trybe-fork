/* eslint-disable camelcase */
import axios from 'axios';
import qs from 'qs';

export const getAuth = async (): Promise<string> => {
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: String(import.meta.env.VITE_CLIENT_ID),
      password: String(import.meta.env.VITE_CLIENT_SECRET),
    },
  };
  const data = { grant_type: 'client_credentials' };

  return axios
    .post('https://accounts.spotify.com/api/token', qs.stringify(data), headers)
    .then(({ data: { access_token } }) => access_token)
    .catch((error) => console.log(error));
};
