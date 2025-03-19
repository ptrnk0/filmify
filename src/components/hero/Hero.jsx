import useFetchData from "../../hooks/useFetchData.js";
import { getPopularMovies } from "../../tmdbApi.js";

const Hero = () => {
  const { data, loading, error } = useFetchData(getPopularMovies);

  const movieWithContent = data?.results.find((movie) => {
    if (movie.backdrop_path && movie.overview) return true;
  });

  return (
    <>
      {data && (
        <section
          className={`relative flex h-150 items-center bg-cover bg-top bg-no-repeat`}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieWithContent.backdrop_path})`,
          }}
        >
          <div className="mx-auto flex flex-col gap-[20px] xl:w-10/12">
            <h2 className="text-6xl invert">{movieWithContent.title}</h2>
            <ul className="flex items-center gap-[12px] font-thin invert">
              <li>{`${movieWithContent.vote_average.toFixed(1)}/10 IMDb`}</li>
              <li>{movieWithContent.release_date.slice(0, 4)}</li>
              <li></li>
              <li></li>
            </ul>
            <p className="w-[500px] invert">{movieWithContent.overview}</p>
            <ul className="flex gap-[22px]">
              <li>
                <button className="bg-primary flex items-center justify-center gap-[8px] rounded-md px-[12px] py-[8px] text-white">
                  <svg className="size-[20px] fill-none stroke-white">
                    <use href="/icons.svg#icon-play" />
                  </svg>
                  Watch trailer
                </button>
              </li>
              <li>
                <button className="bg-primary flex items-center justify-center gap-[8px] rounded-md px-[12px] py-[8px] text-white">
                  <svg className="size-[16px] fill-none stroke-white">
                    <use href="/icons.svg#icon-plus" />
                  </svg>
                  Add to List
                </button>
              </li>
            </ul>
          </div>
          <div className="to-content-bg absolute bottom-0 h-[200px] w-full bg-gradient-to-b"></div>
        </section>
      )}
    </>
  );
};

export default Hero;
