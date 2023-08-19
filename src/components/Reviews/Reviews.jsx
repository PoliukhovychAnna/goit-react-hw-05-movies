import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/API';
import { StyledReviews, ListItem } from './StyledReviews';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const abortCtrl = useRef();
  useEffect(() => {
    if (abortCtrl.current) {
      abortCtrl.current.abort();
    }

    abortCtrl.current = new AbortController();
    setIsLoading(true);

    getMovieReviews({ movieId }, abortCtrl.current.signal)
      .then(response => {
        setReviews(response.results);
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
    <StyledReviews>
      {isLoading && <Loader />}
      {!isLoading &&
        (reviews.length > 0
          ? reviews.map(review => (
              <ListItem key={review.id}>
                <p>
                  <b>Author:</b> {review.author}
                </p>
                <p>
                  <b>Comment:</b> {review.content}
                </p>
              </ListItem>
            ))
          : "We don't have any reviews for this movie.")}
    </StyledReviews>
  );
};
export default Reviews;
