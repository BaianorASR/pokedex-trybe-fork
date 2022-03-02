import React from 'react';
import { ROUTES } from './routes/routes';
import { MusicListProvider } from './shared/';

const App: React.FC = () => {
  return (
    <MusicListProvider>
      <ROUTES>Baianor</ROUTES>
    </MusicListProvider>
  );
};

export default App;
