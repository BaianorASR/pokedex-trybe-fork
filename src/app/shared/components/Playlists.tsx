import React from 'react';
import styled from 'styled-components';

const PlaylistContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 32px;

  img {
    width: 120px;
  }
  
`;

const Card = styled.div`

`;

type Props = {
  playlists: {
    id: string;
    name: string;
    images: [ {url: string} ];
    href: string;
  }[];
  // eslint-disable-next-line no-unused-vars
  func: (event: string) => void;
};

function Playlist({ playlists, func }: Props) {
  return (
    <PlaylistContainer>
      {playlists.map((each) => (
        <Card key={each.id} onClick={() => func(each.href)}>
          <img src={each.images[0].url} alt="" />
        </Card>
      ))}
    </PlaylistContainer>
  );
}

export default Playlist;
