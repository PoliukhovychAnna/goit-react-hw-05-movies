import { useEffect, useRef, useState } from 'react';
import { getTrendingMovies } from 'services/API';
import { Loader } from 'components/Loader/Loader';
import {
  Container,
  Heading,
  MoviesList,
  ListItem,
  StyledLink,
  MovieTitle,
  Img,
} from './StyledHome';

const defaultImg =
  'https://moviemill.com/template_1/img/default-movie-portrait.jpg';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const abortCtrl = useRef();

  useEffect(() => {
    if (abortCtrl.current) {
      abortCtrl.current.abort();
    }

    abortCtrl.current = new AbortController();
    setIsLoading(true);
    getTrendingMovies(abortCtrl.current.signal)
      .then(response => {
        setMovies(response.results);
        setError(null);
        setIsLoading(false);
      })
      .catch(err => {
        if (err.code !== 'ERR_CANCELED') {
          setError(err.message);
        }
      });
  }, [error]);
  return (
    <Container>
      {isLoading && <Loader />}
      {!isLoading && <Heading>Trending movies today </Heading>}
      <MoviesList>
        {movies.map(movie => {
          return (
            <ListItem key={movie.id}>
              <StyledLink to={`movies/${movie.id}`}>
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
    </Container>
  );
};

export default Home;
