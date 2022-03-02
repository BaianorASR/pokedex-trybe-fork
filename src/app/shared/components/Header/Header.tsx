import styled from 'styled-components';
import { FaSpotify } from 'react-icons/fa';
import { devices } from '../../../../styles';

const ScHeader = styled.header`
  color: var(--nord6);
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 10px 0;

  h1 {
    display: flex;
    align-items: center;
    font-family: Gotham Black, sans-serif;
    line-height: 60px;
    font-size: 60px;
  }

  @media ${devices.mobileL} {
    h1 {
      font-size: 40px;
    }
  }
`;

export function Header() {
  return (
    <ScHeader>
      <h1>
        Spotify
        <FaSpotify style={{ color: '#19E68C' }} />
      </h1>
    </ScHeader>
  );
}
