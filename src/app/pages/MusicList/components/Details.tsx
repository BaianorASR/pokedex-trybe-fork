import React, { useContext } from 'react';
import styled from 'styled-components';
import { MusicListContext } from '../../../shared';
import { Duration } from './Duration';

const ListDetails = styled.li`
  display: flex;
  align-items: center;
  margin: 5px;

  img {
    width: 50px;
  }
`;

export const Details: React.FC = () => {
  const { playlistMusics } = useContext(MusicListContext);
  return (
    <ul>
      {playlistMusics?.map(({ track }) => (
        <ListDetails key={track.id}>
          <img src={track.album.images[0].url} alt="" />
          <div>
            <p>{track.name}</p>
            <div>
              <Duration ms={track.duration_ms} />
              <p>{track.artists[0].name}</p>
            </div>
          </div>
        </ListDetails>
      ))}
    </ul>
  );
};
