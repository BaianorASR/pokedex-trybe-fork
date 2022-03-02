import React from 'react';
import styled from 'styled-components';
import { Header, Player } from '../../shared';
import { Genre } from './components/Genre';

const ScMain = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
`;

export const MainContent: React.FC = () => {
  return (
    <ScMain>
      <Header />
      <Genre />
      <Player />
    </ScMain>
  );
};
