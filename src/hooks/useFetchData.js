import { useState, useEffect } from "react";
import fetchData from "../tmdb-api";
import { useTranslation } from "react-i18next";

const useFetchData = (endPoint, query = null) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [t] = useTranslation();

	useEffect(() => {
		async function fetchDataFromApi() {
			try {
				setData(null);
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
	}, [endPoint, query, t]);

	return { data, loading, error };
};

export default useFetchData;
