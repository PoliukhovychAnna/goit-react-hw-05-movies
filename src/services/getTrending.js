import axios from 'axios';

const API_KEY = 'c4ae0d1c8ef3d257c8b5fa435eb44c06';
const baseURL = 'https://api.themoviedb.org/3/trending/movie/day';

const getTrendingMovies = async () => {
  const response = await axios.get(baseURL, { params: { api_key: API_KEY } });
  return response.data;
};

export default getTrendingMovies;
