import axios from 'axios';
import { IPlaylist } from '../../types';

export const getPlaylist = (id: string, token: string): Promise<IPlaylist[]> =>
  axios({
    baseURL: `https://api.spotify.com/v1/browse/categories/${id}/playlists`,
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  }).then(
    ({
      data: {
        playlists: { items },
      },
    }) => items,
  );
