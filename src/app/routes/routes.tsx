import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainContent, MusicList } from '../pages/';

interface IROUTES {
  children: any;
}

export const ROUTES: React.FC<IROUTES> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/music-list" element={<MusicList />} />
      </Routes>
    </BrowserRouter>
  );
};
