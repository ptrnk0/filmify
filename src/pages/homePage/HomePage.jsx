import { useEffect, useState } from "react";
import MovieList from "../../components/movieList/MovieList";
import fetchData from "../../tmdb-api";

const HomePage = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchTrending() {
			setMovies([]);
			const { results } = await fetchData("trending");
			setMovies(results);
		}

		fetchTrending();
	}, []);

	return <MovieList movies={movies} />;
};

export default HomePage;
