import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../layout/Layout";

const HomePage = lazy(() => import("../../pages/homePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/moviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/movieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("../movieCast/MovieCast"));
const MovieReviews = lazy(() => import("../movieReviews/MovieReviews"));
const NotFoundPage = lazy(() =>
  import("../../pages/notFoundPage/NotFoundPage")
);

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
