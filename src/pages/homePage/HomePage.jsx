import useFetchData from "../../hooks/useFetchData";
import MovieList from "../../components/movieList/MovieList";

const HomePage = () => {
	const { data, loading, error } = useFetchData("trendingByDay");

	return (
		<>
			{loading && <p>Loading...</p>}
			{error && <p>Something went wrong, please try again.</p>}
			{data && <MovieList movies={data.results} />}
		</>
	);
};

export default HomePage;
