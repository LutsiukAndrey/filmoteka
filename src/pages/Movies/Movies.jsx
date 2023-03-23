import { useState, useEffect } from 'react';
import { NavBar } from 'components/Navbar';
import api from 'Api/Api';
import { MoviesList } from 'components/MoviesList';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('q');
  useEffect(() => {
    const fetchMovies = async () => {
      const result = await api.getMoviesQuery(value);
      setMovies(result.data.results);
    };
    if (searchValue) {
      setValue(searchValue);
    }
    if (value) {
      fetchMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleSubmit = e => {
    e.preventDefault();
    setValue({ q: e.target.searchfield.value });
  };

  return (
    <>
      <NavBar submit={handleSubmit} />
      {movies.length > 0 ? <MoviesList data={movies} /> : <></>}
    </>
  );
};
