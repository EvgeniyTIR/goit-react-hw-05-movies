import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from '../../services/API';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    try {
      API.fetchReviews(movieId).then(setReviews);
    } catch {
      console.error();
    }
  }, [movieId]);
  return (
    <div>
      {reviews?.length > 0 ? (
        <>
          <h2>Reviews</h2>
          <ul>
            {reviews?.map(r => {
              const { id, author, content } = r;

              return (
                <li key={id}>
                  <p>
                    <b>{author}</b>
                  </p>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>Reviews not found.</p>
      )}
    </div>
  );
};

export default Reviews;
