/* eslint-disable camelcase */
export interface IIcons {
  height: number;
  url: string;
  width: number;
}

export interface IItems {
  href: string;
  icons: IIcons[];
  id: string;
  name: string;
}

export interface IPlaylist {
  collaborative: false;
  description: string;
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: IIcons[];
  name: string;
  owner: {
    display_name: string;
    external_urls: { spotify: string };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  primary_color: null | string | boolean;
  public: null | string | boolean;
  snapshot_id: string;
  tracks: { href: string; total: number };
  type: string;
  uri: string;
}

export type ITracks = {
  album: {
    album_type: string;
    artists: {
      external_urls: { spotify: string };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }[];
    available_markets: string[];
    external_urls: { spotify: string };
    href: string;
    id: string;
    images: IIcons[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: 1;
    type: string;
    uri: string;
  };
  artists: {
    external_urls: { spotify: string };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  episode: boolean;
  explicit: boolean;
  external_ids: { isrc: string };
  external_urls: { spotify: string };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track: boolean;
  track_number: number;
  type: string;
  uri: string;
};

export type ITracksResponse = {
  added_at: string;
  added_by: {
    external_urls: { spotify: string };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  is_local: boolean;
  primary_color: string;
  track: ITracks;
  video_thumbnail: { url: string };
};
