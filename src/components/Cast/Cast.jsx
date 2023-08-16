import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/API';
import { StyledCast, ListItem, Text } from './StyledCast';

const defaultUser =
  'https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const abortCtrl = useRef();
  useEffect(() => {
    if (abortCtrl.current) {
      abortCtrl.current.abort();
    }

    abortCtrl.current = new AbortController();
    getMovieCast({ movieId }, abortCtrl.current.signal)
      .then(response => {
        setCast(response.cast);
        setError(null);
      })
      .catch(err => {
        if (err.code !== 'ERR_CANCELED') {
          setError(err.message);
        }
      });
  }, [movieId, error]);

  return (
    <StyledCast>
      {cast.length > 0
        ? cast.map(actor => (
            <ListItem key={actor.cast_id}>
              <img
                src={
                  actor.profile_path !== null
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : defaultUser
                }
                alt={actor.name}
                width={133}
                height={195}
              />
              <Text>{actor.name}</Text>
              <Text> Character: {actor.character}</Text>
            </ListItem>
          ))
        : "Sorry, there is no information about movie's cast."}
    </StyledCast>
  );
};
export default Cast;
