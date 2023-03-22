import { generatePath } from 'react-router-dom';

export const routes = {
  home: '/',
  movies: '/movies',
  movieDetails: '/movies/:movieId',
  cast: 'cast',
  reviews: 'reviews',
};
export const getMoveiDetaisPage = id =>
  generatePath(routes.movieDetails, { movieId: id });
