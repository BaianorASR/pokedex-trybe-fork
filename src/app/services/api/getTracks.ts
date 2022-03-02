import axios from 'axios';
import { ITracksResponse } from '../../types';

export const getTracks = (
  url: string,
  token: string,
): Promise<ITracksResponse[]> =>
  axios({
    baseURL: url,
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  }).then(({ data: { items } }) => items);
