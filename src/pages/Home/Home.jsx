import { useEffect, useRef, useState } from 'react';
import { getTrendingMovies } from 'services/API';
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
  const abortCtrl = useRef();

  useEffect(() => {
    if (abortCtrl.current) {
      abortCtrl.current.abort();
    }

    abortCtrl.current = new AbortController();
    getTrendingMovies(abortCtrl.current.signal)
      .then(response => {
        setMovies(response.results);
        setError(null);
      })
      .catch(err => {
        if (err.code !== 'ERR_CANCELED') {
          setError(err.message);
        }
      });
  }, [error]);
  return (
    <Container>
      <Heading>Trending movies today </Heading>
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
