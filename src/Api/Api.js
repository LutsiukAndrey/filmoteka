// import axios from 'axios';
// axios.defaults.baseURL = 'https://api.themoviedb.org/';
// const APIKEY = `a4fd15616812659cb158066e9f0288f7`;
// export const getImages = gsfdgsd => {
//   return axios.get(`?${gsfdgsd}api_key=${APIKEY}`);
// };

// export default getImages;

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const APIKEY = `a438b3320e0856ef78f03a44c35f6579`;

const getMoviesDay = async () => {
  const data = await axios.get(`trending/movie/day?api_key=${APIKEY}`);
  return data;
};

const getMoviesQuery = async query => {
  const data = await axios.get(`search/movie/${query}?api_key=${APIKEY}`);
  return data;
};

const getMoviesInfo = async id => {
  const data = await axios.get(`/movie/${id}?api_key=${APIKEY}`);
  return data;
};

const getMoviesCast = async abc => {
  const data = await axios.get(`${abc}?api_key=${APIKEY}`);
  return data;
};

const getMoviesReviews = async id => {
  const data = await axios.get(`/movie/${id}/reviews?api_key=${APIKEY}`);
  return data;
};

const api = {
  getMoviesDay,
  getMoviesQuery,
  getMoviesInfo,
  getMoviesCast,
  getMoviesReviews,
};

export default api;
