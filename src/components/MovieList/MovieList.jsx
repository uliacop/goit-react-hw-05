import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ trendingMovies }) => {
  const location = useLocation();

  return (
    <ul className={css.movies_list}>
      {trendingMovies.map((movie, index) => {
        const movieId = movie.id;
        const isPlaceholder = !movie.poster_path;
        return (
          <li className={css.movie_item} key={`${movieId}-${index}`}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
              }
              className={isPlaceholder ? css.placeholder_image : ""}
              loading="lazy"
              alt="Movie poster"
            />
            <Link
              state={{ from: location }}
              to={`/movies/${movieId}`}
              className={css.movie_link}
            >
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
