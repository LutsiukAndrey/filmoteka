import { useState, useEffect } from 'react';
import { NavBar } from 'components/Navbar';
import api from 'Api/Api';
import { MoviesList } from 'components/MoviesList';
import { useLocation } from 'react-router-dom';
export const Movies = () => {
  const location = useLocation();
  console.log(location);
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const result = await api.getMoviesQuery(value);
      setMovies(result.data.results);
    };
    if (value) {
      fetchMovies();
    }
  }, [value]);

  const handleSubmit = e => {
    e.preventDefault();
    setValue(e.target.searchfield.value);
  };

  return (
    <>
      <NavBar submit={handleSubmit} />
      {movies.length > 0 ? <MoviesList data={movies} /> : <></>}
    </>
  );
};
