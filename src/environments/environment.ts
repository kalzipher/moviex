// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const API: string = 'https://api.themoviedb.org/3';

export const environment = {
  production: false,
  apiGenres: `${API}/genre/movie/list`,
  apiMovies: `${API}/discover/movie`,
  apiMovie: `${API}/movie`,
  apiKey: '1cc88a0dddb6ebe85a8c68b7211a5ae7',
  language: 'es-CO',
  baseUrlImage: 'http://image.tmdb.org/t/p/w780',
  baseUrlBackdropPoster: 'http://image.tmdb.org/t/p/original',
};
