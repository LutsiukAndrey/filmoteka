import './Home.scss';

import React, { useEffect, useState } from 'react';
import api from 'Api/Api';
import { MoviesList } from 'components/MoviesList';
import { Hero } from 'Hero/Hero';

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
    <div className="home">
      <Hero />
      <MoviesList data={movies} />
<div>
    <a href="https://www.instagram.com/">MDN</a>
    <a href="https://www.youtube.com/watch?v=CEzacaCUDqU">MDN</a>

  

</div>
    </div>
  );
};
