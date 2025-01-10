import { useState, useEffect } from "react";
import fetchData from "../tmdb-api";

const useFetchData = (endPoint, query = null) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		async function fetchDataFromApi() {
			try {
				setLoading(true);
				setError(false);
				const results = await fetchData(endPoint, query);
				setData(results);
			} catch (error) {
				setError(true);
			} finally {
				setLoading(false);
			}
		}

		fetchDataFromApi();
	}, [endPoint, query]);

	return { data, loading, error };
};

export default useFetchData;
