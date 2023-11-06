import { Actor, CrewMember } from '../crew';
import { TGenres } from '../genres';
import { Video } from '../videos';

export type TMovieBasic = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

  
  interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }
  
  interface ProductionCountry {
    iso_3166_1: string;
    name: string;
  }
  
  interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
  }
  
  export interface TMovieCompleted {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: unknown;
    budget: number;
    genres: TGenres[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    release_dates: {
      results: {
        iso_3166_1: string;
        release_dates: {
          certification: string;
          descriptors: unknown[]
          iso_639_1: string
          note: string
          release_date: string
          type: number
        }[]
      }[]
    };
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    credits: {
      cast: Actor[];
      crew: CrewMember[];
    };
    recommendations: {
      results: TMovieBasic[]
    },
    videos: {
      results: Video[]
    }
  }