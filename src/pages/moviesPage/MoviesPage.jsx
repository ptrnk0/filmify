import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/movieList/MovieList";
import useFetchData from "../../hooks/useFetchData";

const MoviesPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get("query");

	const { data, loading, error } = useFetchData("search", query);

	const handleSubmit = (evt) => {
		evt.preventDefault();
		const form = evt.target;
		setSearchParams({ query: form.elements.search.value });
		form.reset();
	};

	return (
		<>
			<form onSubmit={(evt) => handleSubmit(evt)}>
				<input type="text" name="search" />
				<button type="submit">Search</button>
			</form>
			{loading && <p>Loading...</p>}
			{error && <p>Something went wrong, please try again.</p>}
			<>{data && <MovieList movies={data.results} />}</>
		</>
	);
};

export default MoviesPage;
