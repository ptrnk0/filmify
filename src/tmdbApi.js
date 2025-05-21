import axios from "axios";
import i18next from "i18next";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${
  import.meta.env.VITE_API_KEY
}`;

export const fetchData = async (endPoint, query) => {
  const END_POINT = {
    trendingByDay: "",
    trendingByWeek: "/trending/movie/week",
    search: `/search/movie?query=${query}`,
    details: `/movie/${query}`,
    credits: `/movie/${query}/credits`,
    reviews: `/movie/${query}/reviews`,
  };

  if (!END_POINT[endPoint]) {
    throw new Error(`Invalid request type: ${endPoint}`);
  } else if (!endPoint.includes("trending") && !query) {
    return null;
  }

  const response = await axios.get(END_POINT[endPoint], {
    params: {
      language: i18next.language,
    },
  });
  return response.data;
};

export const getPopularMovies = async () => {
  const response = await axios.get("/movie/popular", {
    params: {
      language: i18next.language,
    },
  });
  return response.data;
};

export const getTrendingMoviesByDay = async () => {
  const response = await axios.get("/trending/movie/day", {
    params: {
      language: i18next.language,
    },
  });
  return response.data;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, {
    params: {
      language: i18next.language,
    },
  });
  return response.data;
};
