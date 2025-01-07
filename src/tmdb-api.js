import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${
	import.meta.env.VITE_API_KEY
}`;

const fetchData = async () => {
	const response = await axios.get("/authentication");
	console.log(response);

	return response.data;
};

export default fetchData;
