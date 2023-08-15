import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/API';

const defaultImg =
  'https://moviemill.com/template_1/img/default-movie-portrait.jpg';
const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location?.state?.from ?? '/';
  // const abortCtrl = useRef();
  useEffect(() => {
    getMovieDetails({ movieId })
      .then(response => {
        setMovie(response);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  console.log(movie);

  return (
    <>
      <Link to={backLinkHref}> Back to the list of movies</Link>
      <h1>
        {movie.title} ({movie.release_date && movie.release_date.slice(0, 4)})
      </h1>
      <img
        src={
          movie.poster_path !== null
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : defaultImg
        }
        alt={movie.title}
        width={300}
      />
      <p>
        <b>User score:</b> {movie.vote_average && movie.vote_average.toFixed(1)}
      </p>
      <p>
        <b>Overview:</b> {movie.overview ? movie.overview : 'No overview'}
      </p>
      <p>
        {' '}
        <b>Genres:</b>
      </p>
      <ul>
        {movie.genres &&
          movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
      </ul>
      <ul>
        <li>
          <Link to="cast" state={{ ...location.state }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ ...location.state }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
