import useFetchData from "../../hooks/useFetchData.js";
import { getPopularMovies } from "../../tmdbApi.js";

const Hero = () => {
  const { data, loading, error } = useFetchData(getPopularMovies);
  const firstMovie = data?.results[0];

  return (
    <>
      {data && (
        <section
          className={`bg-[url(https://image.tmdb.org/t/p/w1280${firstMovie.backdrop_path})] flex h-150 items-center bg-cover bg-center bg-no-repeat`}
        >
          <div className="flex flex-col gap-[20px] invert">
            <h2 className="text-6xl">{firstMovie.title}</h2>
            <ul className="flex items-center gap-[12px]">
              <li>{`${firstMovie.vote_average.toFixed(1)}/10 IMDb`}</li>
              <li>{firstMovie.release_date.slice(0, 4)}</li>
              <li></li>
              <li></li>
            </ul>
            <p className="w-[500px]">{firstMovie.overview}</p>
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
