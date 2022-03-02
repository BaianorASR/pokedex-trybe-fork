/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import { ITracksResponse } from '../../types';

interface IMusicListContextData {
  playlistMusics: ITracksResponse[] | undefined;
  setPlaylistMusics: (value: ITracksResponse[]) => void;
}

export const MusicListContext = createContext<IMusicListContextData>(
  {} as IMusicListContextData,
);

export const MusicListProvider: React.FC = ({ children }) => {
  const [playlistMusics, setPlaylistMusics] = useState<
    ITracksResponse[] | undefined
  >();
  // useEffect(() => {}, [playlistMusics]);

  return (
    <MusicListContext.Provider
      value={{ playlistMusics: playlistMusics, setPlaylistMusics }}
    >
      {children}
    </MusicListContext.Provider>
  );
};
