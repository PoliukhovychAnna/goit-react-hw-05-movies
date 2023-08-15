import axios from 'axios';

const API_KEY = 'c4ae0d1c8ef3d257c8b5fa435eb44c06';
const baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async signal => {
  const response = await axios.get(`${baseURL}trending/movie/day`, {
    signal,
    params: { api_key: API_KEY },
  });
  return response.data;
};

export const getMovieDetails = async ({ movieId }) => {
  const response = await axios.get(`${baseURL}movie/${movieId}`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};

export const getMovieCast = async ({ movieId }, signal) => {
  const response = await axios.get(`${baseURL}movie/${movieId}/credits`, {
    signal,
    params: { api_key: API_KEY },
  });
  return response.data;
};

export const getMovieReviews = async ({ movieId }, signal) => {
  const response = await axios.get(`${baseURL}movie/${movieId}/reviews`, {
    signal,
    params: { api_key: API_KEY },
  });
  return response.data;
};

export const getMovieByRequest = async (query, signal) => {
  const response = await axios.get(
    `${baseURL}search/movie?query=${query}&language=en-US&page=1`,
    { signal, params: { api_key: API_KEY } }
  );
  console.log(response.data);
  return response.data;
};
