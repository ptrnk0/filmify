import useFetchData from "../../hooks/useFetchData";
import MovieList from "../../components/movieList/MovieList";
import CarouselComponent from "../../components/carouselComponent/CarouselComponent.jsx";
import { Pagination } from "antd";

const HomePage = () => {
  const { data, loading, error } = useFetchData("trendingByDay");

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong, please try again.</p>}
      {data && (
        <>
          <CarouselComponent movies={data.results} />
          <MovieList movies={data.results} />
          <Pagination defaultCurrent={1} total={50} align="center" />
        </>
      )}
    </>
  );
};

export default HomePage;
