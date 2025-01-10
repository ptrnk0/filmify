import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${
	import.meta.env.VITE_API_KEY
}`;

const fetchData = async (request, movieId) => {
	const END_POINT = {
		trending: "/trending/movie/day",
		search: "/search/movie",
		details: `/movie/${movieId}`,
		credits: `/movie/${movieId}/credits`,
		reviews: `/movie/${movieId}/reviews`,
	};

	if (!END_POINT[request]) {
		throw new Error(`Invalid request type: ${request}`);
	}

	const response = await axios.get(END_POINT[request]);
	return response.data;
};

export default fetchData;
