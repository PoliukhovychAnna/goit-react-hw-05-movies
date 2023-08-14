import axios from 'axios';
const API_KEY = 'c4ae0d1c8ef3d257c8b5fa435eb44c06';
const URL = 'https://api.themoviedb.org/3/movie/';
export const getMovieDetails = async ({ movieId }) => {
  console.log(movieId);
  const response = await axios.get(`${URL}${movieId}`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};
