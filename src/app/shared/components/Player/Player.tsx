import React from 'react';
import styled from 'styled-components';
import {
  CgPlayTrackPrev,
  CgPlayTrackNext,
  CgPlayButtonO,
  // CgPlayPauseO,
} from 'react-icons/cg';
import { devices } from '../../../../styles';

const ScPlayer = styled.div`
  font-family: Roboto, Oxygen, Ubuntu, sans-serif;
  background-color: var(--nord7);
  height: 80px;
  width: 100vw;
  position: fixed;
  bottom: 0;

  @media ${devices.mobileL} {
    text-align: center;
    color: var(--nord0);
    div {
      align-items: center;
      display: flex;
      font-size: 50px;
      gap: 12px;
      justify-content: center;
    }
    p {
      padding: 3px;
    }
  }
`;

export const Player: React.FC = () => {
  return (
    <ScPlayer>
      <p>Now Playing</p>
      <div>
        <CgPlayTrackPrev />
        <CgPlayButtonO />
        <CgPlayTrackNext />
      </div>
    </ScPlayer>
  );
};
