import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { getMovieDetails } from 'services/API';
import {
  Container,
  BackLink,
  Icon,
  Heading,
  MovieInfo,
  Details,
  ListOfGenres,
  ListOfAddInfo,
  StyledNavLink,
  Img,
} from './StyledMovieDetails';

const defaultImg =
  'https://moviemill.com/template_1/img/default-movie-portrait.jpg';
const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location?.state?.from ?? '/';
  const abortCtrl = useRef();
  useEffect(() => {
    if (abortCtrl.current) {
      abortCtrl.current.abort();
    }

    abortCtrl.current = new AbortController();
    setIsLoading(true);
    getMovieDetails({ movieId }, abortCtrl.current.signal)
      .then(response => {
        setMovie(response);
        setIsLoading(false);
        setError(null);
      })
      .catch(err => {
        if (err.code !== 'ERR_CANCELED') {
          setIsLoading(false);
          setError(err.message);
        }
      });
  }, [movieId, error]);

  return (
    <Container>
      <BackLink to={backLinkHref}>
        <Icon />
        Back to the list of movies
      </BackLink>
      {isLoading && <Loader />}
      {!isLoading && (
        <MovieInfo>
          <Img
            src={
              movie.poster_path !== null
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultImg
            }
            alt={movie.title}
            width={300}
          />
          <Details>
            <Heading>
              {movie.title} (
              {movie.release_date && movie.release_date.slice(0, 4)})
            </Heading>
            <p>
              <b>User score: </b>
              {movie.vote_average && movie.vote_average.toFixed(1)}
            </p>
            <p>
              <b>Overview:</b> {movie.overview ? movie.overview : 'No overview'}
            </p>
            <MovieInfo>
              <p>
                <b>Genres:</b>
              </p>
              <ListOfGenres>
                {movie.genres &&
                  movie.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
              </ListOfGenres>
            </MovieInfo>
            <ListOfAddInfo>
              <li>
                <StyledNavLink to="cast" state={{ ...location.state }}>
                  Cast
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="reviews" state={{ ...location.state }}>
                  Reviews
                </StyledNavLink>
              </li>
            </ListOfAddInfo>
          </Details>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </MovieInfo>
      )}
    </Container>
  );
};

export default MovieDetails;
