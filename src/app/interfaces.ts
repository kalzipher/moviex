export interface ResponseMovies {
  page:number,
  total_results: number,
  total_pages: number,
  results: Movie[];
};
export interface Movie {
  adult: boolean;
  backdrop_path: string;
  vote_count: number;
  id: number;
  video: boolean;
  vote_average: number;
  title: string;
  popularity: number;
  poster_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  overview: string;
  release_date: string;
}
export interface Genrer {
  id: number;
  name: string;
  status?: boolean;
}
export interface Company {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
export interface MovieDeatil extends Movie {
  belongs_to_collection: string | any;
  budget: number;
  genres: Genrer[];
  homepage: string;
  imdb_id: string;
  production_companies: Company[];
  production_countries: any[];
  runtime: number;
  spoken_languages: any[];
  status: string;
  tagline: string;
}
export interface Category {
  name: string;
  direction: string;
  status?: boolean;
}
