import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Header } from '../../shared';
import { Details } from '..';

export const MusicList: React.FC = () => {
  return (
    <>
      <Header></Header>
      <Details />
      <AudioPlayer
        style={{
          backgroundColor: 'var(--nord3)',
          position: 'fixed',
          bottom: 0,
        }}
      />
    </>
  );
};
