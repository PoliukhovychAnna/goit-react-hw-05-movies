import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovieByRequest } from 'services/API';
import { Searchbar } from 'components/Searchbar/Searchbar';
import {
  Container,
  MoviesList,
  ListItem,
  StyledLink,
  MovieTitle,
  Img,
} from 'pages/Home/StyledHome';

const defaultImg =
  'https://moviemill.com/template_1/img/default-movie-portrait.jpg';
const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const abortCtrl = useRef();
  const location = useLocation();
  const chooseURL = id => {
    return location.pathname === '/movies' ? `${id}` : `movies/${id}`;
  };

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
        const movies = await getMovieByRequest(query, abortCtrl.current.signal);

        if (movies.results.length === 0) {
          return toast.error('Sorry, there are no images for your request...', {
            autoClose: 3000,
          });
        }

        setMovies(movies);
        setError(null);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error.message);
        }
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

  return (
    <Container>
      <Searchbar onQueryChange={onQueryChange} />
      {error && <p>{error}</p>}
      {movies && (
        <MoviesList>
          {movies.results.map(movie => {
            return (
              <ListItem key={movie.id}>
                <StyledLink to={chooseURL(movie.id)} state={{ from: location }}>
                  <Img
                    src={
                      movie.poster_path !== null
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : defaultImg
                    }
                    alt={movie.title}
                    width={200}
                  />
                  <MovieTitle>{movie.title}</MovieTitle>
                </StyledLink>
              </ListItem>
            );
          })}
        </MoviesList>
      )}
      <ToastContainer />
    </Container>
  );
};

export default Movies;
