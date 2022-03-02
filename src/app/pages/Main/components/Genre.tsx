import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAuth, getGenre } from '../../../services';
import { IItems } from '../../../types';
import { GenresInfos } from './Genre/Genre_Infos';

const ScGenres = styled.div`
  width: 90vw;
  display: flex;
  flex-flow: column;
  padding: 8px;
  gap: 16px;
`;

export const Genre: React.FC = () => {
  const [token, setToken] = useState('');
  const [genres, setGenres] = useState<IItems[]>();

  useEffect(() => {
    if (!token) {
      getAuth().then((data) => setToken(data));
      return;
    }
    getGenre(token).then((data) => setGenres(data));
  }, [token]);

  return (
    <ScGenres className="genre-container">
      {genres &&
        genres.map((each) => (
          <GenresInfos key={each.id} object={each} token={token} />
        ))}
    </ScGenres>
  );
};
