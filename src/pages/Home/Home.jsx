import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'services/API';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const abortCtrl = useRef();

  useEffect(() => {
    if (abortCtrl.current) {
      abortCtrl.current.abort();
    }

    abortCtrl.current = new AbortController();
    getTrendingMovies(abortCtrl.current.signal)
      .then(response => {
        setMovies(response.results);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      <h1>Trending today </h1>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
