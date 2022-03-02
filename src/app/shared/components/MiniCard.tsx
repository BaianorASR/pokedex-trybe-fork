import React from 'react';
import styled from 'styled-components';
import { IGenre } from '../../App';
import '../styles/nord.css';

interface Element {
  genre: IGenre;
  // eslint-disable-next-line no-unused-vars
  fn: (event: React.MouseEvent) => void;
}

const GenreCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--nord1);
  position: relative;
`;

const TitleCard = styled.p`
  bottom: 10px;
  text-align: center;
  font-size: 1rem;
  font-family: Gotham Black, sans-serif;
  letter-spacing: 2px;
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 1;
`;

const ImgCard = styled.img`
  width: 125px;
  height: 125px;
`;

function MiniCard({ genre, fn }: Element) {
  return (
    <GenreCard
      className="genre-card"
      role="button"
      tabIndex={0}
      id={genre.id}
      onClick={(e) => fn(e)}
    >
      <TitleCard>
        {genre.name === 'Dance/Eletrônica' ? 'Eletrônica' : genre.name}
      </TitleCard>
      <ImgCard src={genre.icons[0].url} alt={genre.id} />
    </GenreCard>
  );
}

export default MiniCard;
