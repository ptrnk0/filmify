import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${
	import.meta.env.VITE_API_KEY
}`;

const fetchData = async (request, params = {}) => {
	const END_POINT = {
		trending: "/trending/movie/day",
		search: "/search/movie",
		details: `/movie/${params.movieId}`,
		credits: `/movie/${params.movieId}/credits`,
		reviews: `/movie/${params.movieId}/reviews`,
	};

	try {
		if (!END_POINT[request]) {
			throw new Error(`Invalid request type: ${request}`);
		}

		const response = await axios.get(END_POINT[request]);

		return response.data;
	} catch (error) {
		console.error(`Error fetching data: ${error.message}`);
		// return null;
	}
};

export default fetchData;
