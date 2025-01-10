import { useState, useEffect } from "react";
import fetchData from "../tmdb-api";

const useFetchData = (endpoint, movieId = null) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		async function fetchDataFromApi() {
			try {
				setLoading(true);
				const results = await fetchData(endpoint, movieId);
				setData(results);
			} catch (error) {
				setError(true);
			} finally {
				setLoading(false);
			}
		}

		fetchDataFromApi();
	}, [endpoint, movieId]);

	return { data, loading, error };
};

export default useFetchData;
