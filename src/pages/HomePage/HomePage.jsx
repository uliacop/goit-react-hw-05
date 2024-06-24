import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../movies-api";
import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import Error from "../../components/Errors/Errors";

const HomePage = () => {
  const [trendingMovies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setError(false);
        const { total_pages, results } = await fetchTrendingMovies(page);
        setMovies((prevMovies) => [...prevMovies, ...results]);
        setShowBtn(total_pages > page);
      } catch (error) {
        setError(true);
      }
    }
    fetchMovies();
  }, [page]);

  const onClickButton = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (trendingMovies !== null) {
    return (
      <section className={css.home_section}>
        <h1 className={css.home_title}>Tranding today</h1>
        {error && <Error />}
        <MovieList trendingMovies={trendingMovies} />
        {showBtn && <LoadMoreBtn onClickButton={onClickButton} />}
      </section>
    );
  }
};

export default HomePage;
