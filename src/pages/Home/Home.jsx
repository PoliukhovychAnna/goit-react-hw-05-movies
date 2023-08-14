import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getTrendingMovies from 'services/getTrending';
const Home = () => {
  const [movies, setMovies] = useState([]);
  console.log(movies);

  useEffect(() => {
    getTrendingMovies()
      .then(response => {
        setMovies(response.results);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
