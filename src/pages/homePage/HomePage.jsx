import useFetchData from "../../hooks/useFetchData";
import MovieList from "../../components/movieList/MovieList";

const HomePage = () => {
	const {
		data: { results },
		loading,
		error,
	} = useFetchData("trending");

	return <>{results && <MovieList movies={results} />}</>;
};

export default HomePage;
