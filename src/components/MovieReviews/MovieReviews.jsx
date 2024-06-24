import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../movies-api";
import css from "./MovieReviews.module.css";
import Error from "../../components/Errors/Errors";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movie, setMovieReviews] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchCast() {
      try {
        setError(false);
        const movieReviews = await fetchMovieReviews(movieId);
        setMovieReviews(movieReviews);
      } catch (error) {
        setError(true);
      }
    }
    fetchCast();
  }, [movieId]);
  if (movie.length !== 0) {
    return (
      <div>
        {error && <Error />}
        <ul className={css.review_list}>
          {movie.map((review) => {
            return (
              <li key={review.id}>
                <p className={css.author}>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div>There are no reviews</div>;
  }
};

export default MovieReviews;
