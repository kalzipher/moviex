const API: string = 'https://api.themoviedb.org/3';

export const environment = {
  production: true,
  apiGenres: `${API}/genre/movie/list`,
  apiMovies: `${API}/discover/movie`,
  apiMovie: `${API}/movie`,
  apiKey: '1cc88a0dddb6ebe85a8c68b7211a5ae7',
  language: 'es-CO',
  baseUrlImage: 'http://image.tmdb.org/t/p/w780',
  baseUrlBackdropPoster: 'http://image.tmdb.org/t/p/original',
};
