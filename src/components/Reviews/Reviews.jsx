import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/API';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
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
      })
      .catch(err => console.log(err));
  }, [movieId]);

  console.log(reviews);

  return reviews.length > 0 ? (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p>
            <b>Author:</b> {review.author}
          </p>
          <p>
            <b>Comment:</b> {review.content}
          </p>
        </li>
      ))}
    </ul>
  ) : (
    "We don't have any reviews for this movie."
  );
};
export default Reviews;
