import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/API';
import { StyledReviews, ListItem } from './StyledReviews';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const abortCtrl = useRef();
  useEffect(() => {
    if (abortCtrl.current) {
      abortCtrl.current.abort();
    }

    abortCtrl.current = new AbortController();

    getMovieReviews({ movieId }, abortCtrl.current.signal)
      .then(response => {
        setReviews(response.results);
        setError(null);
      })
      .catch(err => {
        if (err.code !== 'ERR_CANCELED') {
          setError(err.message);
        }
      });
  }, [movieId, error]);

  return reviews.length > 0 ? (
    <StyledReviews>
      {reviews.map(review => (
        <ListItem key={review.id}>
          <p>
            <b>Author:</b> {review.author}
          </p>
          <p>
            <b>Comment:</b> {review.content}
          </p>
        </ListItem>
      ))}
    </StyledReviews>
  ) : (
    "We don't have any reviews for this movie."
  );
};
export default Reviews;
