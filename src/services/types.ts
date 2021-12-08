/* eslint-disable no-shadow */
export enum MediaType {
  Movie = `movie`,
  Tv = `tv`,
}

export enum OriginalLanguage {
  En = `en`,
  Fr = `fr`,
  Th = `th`,
  Ja = `ja`,
  Ko = `ko`,
  Da = `da`,
}

export type ITrends<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

export interface IMovie {
  poster_path: string;
  video: boolean;
  vote_average: number;
  overview: string;
  release_date: string;
  vote_count: number;
  adult: boolean;
  backdrop_path: string;
  title: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  popularity: number;
  media_type: MediaType;
}

export interface ITv {
  overview: string;
  name: string;
  vote_count: number;
  genre_ids: number[];
  backdrop_path: string;
  original_language: OriginalLanguage;
  first_air_date: string;
  original_name: string;
  origin_country: string[];
  poster_path: string;
  vote_average: number;
  id: number;
  popularity: number;
  media_type: MediaType;
}

export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}

export interface TvDetail {
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air: null;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Network[];
  production_countries: ProductionCountry[];
  seasons: Season[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

export interface LastEpisodeToAir {
  air_date: Date;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Network {
  name: string;
  id: number;
  logo_path: null | string;
  origin_country: string;
}

export interface Season {
  air_date: Date;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}
