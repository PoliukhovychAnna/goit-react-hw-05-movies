import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/getMovieDetails';
const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
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
      <h1>
        {movie.title} ({movie.release_date && movie.release_date.slice(0, 4)})
      </h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={300}
      />
      <p>
        <b>User score:</b> {movie.vote_average && movie.vote_average.toFixed(1)}
      </p>
      <p>
        <b>Overview:</b> {movie.overview}
      </p>
      <p>
        {' '}
        <b>Genres:</b>
      </p>
      <ul>
        {movie.genres &&
          movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
      </ul>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
