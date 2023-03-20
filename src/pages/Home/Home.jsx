import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from 'Api/Api';
import { MoviesList } from 'components/MoviesList';

export const Home = () => {
  const location = useLocation();
  console.log({ from: location });
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
