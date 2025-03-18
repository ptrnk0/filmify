import Hero from "../../components/hero/Hero.jsx";
import MovieList from "../../components/movieList/MovieList.jsx";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="relative -top-24">
        <MovieList>Popular trailers</MovieList>
        <MovieList>Popular trailers</MovieList>
        <MovieList>Popular trailers</MovieList>
      </div>
    </>
  );
};

export default HomePage;
