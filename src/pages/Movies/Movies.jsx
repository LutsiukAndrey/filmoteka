import './Movies.scss';

import { useState, useEffect } from 'react';
import { SearchBar } from 'components/SearchBar';
import api from 'Api/Api';
import { MoviesList } from 'components/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { Notifycation } from 'components/Alert/Notifycation';

export const Movies = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('q');

  const [showNotification, setShowNotification] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    const fetchMovies = async () => {
      const result = await api.getMoviesQuery(value);
      setMovies(result.data.results);
      if (result.data.results.length === 0) {
        console.log('dafadsf');
        setErrorMessage('Movies not found');
        setShowNotification(true);
      }
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
    const { value } = e.target.searchfield;

    if (!value) {
      setErrorMessage('Please, enter something');
      setShowNotification(true);
      return;
    }
    setValue({ q: value });
  };

  return (
    <div className="moviesPage ">
      <Notifycation
        showNotification={showNotification}
        errorMessage={errorMessage}
        setShowNotification={setShowNotification}
      />
      <SearchBar submit={handleSubmit} />
      {movies.length > 0 ? <MoviesList data={movies} /> : <></>}
    </div>
  );
};
