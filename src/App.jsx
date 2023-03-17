import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';
import Cast from './components/Cast';
import Reviews from './components/Reviews';
import api from 'Api/Api';
export const App = () => {
  console.log(api.getMoviesCast(`/movie/10/credits`));
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="//movies/:movieId" element={<MovieDetails />}>
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/cast" element={<Cast />} />
        </Route>
      </Routes>
    </div>
  );
};
