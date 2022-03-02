import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ScPlaylistList, ScPlaylistImage } from './style';
import { getPlaylist, getTracks } from '../../../../services';
import { IItems, IPlaylist } from '../../../../types';
import { MusicListContext } from '../../../../shared';

const ScInfosGenres = styled.div``;

interface IGenresInfosProps {
  object: IItems;
  token: string;
}

export const GenresInfos: React.FC<IGenresInfosProps> = ({ object, token }) => {
  const { setPlaylistMusics } = useContext(MusicListContext);
  const [playlists, setPlaylists] = useState<IPlaylist[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPlaylist(object.id, token).then((playlist) => setPlaylists(playlist));
  }, []);

  return playlists.length > 0 ? (
    <ScInfosGenres>
      <h2>{object.name}</h2>
      <ScPlaylistList>
        {playlists.map((each) => (
          <ScPlaylistImage
            src={each.images[0].url}
            alt={`Image da playlist ${object.name}`}
            key={each.id}
            id={each.tracks.href}
            onClick={(e) => {
              getTracks(e.currentTarget.id, token).then((data) => {
                setPlaylistMusics(data);
                navigate('/music-list');
              });
            }}
          />
        ))}
      </ScPlaylistList>
    </ScInfosGenres>
  ) : (
    <p>Loading</p>
  );
};
