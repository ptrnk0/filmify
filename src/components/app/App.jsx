import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "../navigation/Navigation";

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
			<Navigation />
			<main className="container">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/movies" element={<MoviesPage />} />
					<Route
						path="/movies/:movieId"
						element={<MovieDetailsPage />}
					>
						<Route path="cast" element={<MovieCast />} />
						<Route path="reviews" element={<MovieReviews />} />
					</Route>
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</main>
		</Suspense>
	);
};

export default App;
