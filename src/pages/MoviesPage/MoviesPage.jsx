import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { fetchMovieSearch } from "../../movies-api";
import Loader from "../../components/Loader/Loader";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../../components/SearchBar/SearchBar";
import Error from "../../components/Errors/Errors";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const inputSearch = searchParams.get("query");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!inputSearch) return;
    async function fetchMoviesByQuery() {
      try {
        setLoading(true);
        setError(false);
        const { total_pages, results } = await fetchMovieSearch(
          inputSearch,
          page
        );
        setMovies((prevMovies) => [...prevMovies, ...results]);
        setShowBtn(total_pages > page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMoviesByQuery();
  }, [inputSearch, page]);

  const onSubmit = (inputSearch) => {
    setSearchParams({ query: inputSearch });
    setMovies([]);
    setPage(1);
    setShowBtn(false);
  };
  const onClickButton = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {loading && <Loader />}
      {error && <Error />}
      {movies !== null && <MovieList trendingMovies={movies} />}
      {showBtn && <LoadMoreBtn onClickButton={onClickButton} />}
    </>
  );
};

export default MoviesPage;
