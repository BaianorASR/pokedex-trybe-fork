import axios from 'axios';
import { IItems } from '../../types';

export const getGenre = (token: string): Promise<IItems[]> =>
  axios({
    baseURL: 'https://api.spotify.com/v1/browse/categories?locale=pt-br',
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  }).then(({ data: { categories } }) => categories.items);
