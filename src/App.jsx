import { Routes, Route, Link } from 'react-router-dom';
import { Home } from 'pages/Home';
import { MovieDetails } from 'pages/MovieDetails';
import { Movies } from 'pages/Movies';
import { Cast } from 'pages/MovieDetails/Cast';
import { Reviews } from 'pages/MovieDetails/Reviews';
import { NotFound } from 'pages/NotFound/NotFound';
import { routes } from 'routes';

export const App = () => {
  const { home, movies, movieDetails, cast, reviews } = routes;
  return (
    <div>
      <nav>
        <Link to={home}>Home</Link>
        <Link to={movies}>Movies</Link>
      </nav>
      <Routes>
        <Route path={home} element={<Home />} />
        <Route path={movies} element={<Movies />} />
        <Route path={movieDetails} element={<MovieDetails />}>
          <Route path={cast} element={<Cast />} />
          <Route path={reviews} element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
