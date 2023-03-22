import React, { useEffect, useState } from 'react';
import api from 'Api/Api';
import { MoviesList } from 'components/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await api.getMoviesDay();

      setMovies(result.data.results);
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <p>Home Page</p>
      <MoviesList data={movies} />
    </div>
  );
};
