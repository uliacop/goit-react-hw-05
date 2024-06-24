import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import { Suspense, lazy } from "react";
import Loader from "./Loader/Loader";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);

const App = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies" element={<MoviesPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};
export default App;
