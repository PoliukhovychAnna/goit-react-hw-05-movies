import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovieByRequest } from 'services/API';
import { Searchbar } from 'components/Searchbar/Searchbar';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');
  //   const [currentPage, setPage] = useState(1);
  const [error, setError] = useState(null);
  //   const [isShowButton, setIsShowButton] = useState(false);
  const abortCtrl = useRef();
  const location = useLocation();

  const chooseURL = id => {
    return location.pathname === '/movies' ? `${id}` : `movies/${id}`;
  };

  console.log(query);

  useEffect(() => {
    if (query === '') {
      return;
    }

    const getMovieInfo = async () => {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }

      abortCtrl.current = new AbortController();

      try {
        setError(null);

        const movies = await getMovieByRequest(query, abortCtrl.current.signal);

        if (movies.length === 0) {
          return 'Sorry, no movies for your query...';
        }

        setMovies(movies);
        setError(null);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error.message);
        }
      } finally {
      }
    };
    getMovieInfo();
  }, [query]);

  const onQueryChange = searchQuery => {
    if (searchQuery === query) {
      return;
    }
    setQuery(searchQuery);
    setError(null);
  };

  console.log(movies);

  return (
    <>
      <Searchbar onQueryChange={onQueryChange} />
      {error && <p>{error}</p>}
      {movies && (
        <ul>
          {movies.results.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={chooseURL(movie.id)} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Movies;
